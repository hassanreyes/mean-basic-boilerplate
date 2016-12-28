import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Router, ActivatedRoute, Params }           from "@angular/router";
import { DomSanitizer }                             from "@angular/platform-browser";
import { D3Service, D3, Selection }                 from 'd3-ng2-service';
import { CeiboShare }                               from "ng2-social-share";

import { ValueLabelPair }                           from "../common/commons";
import { PollsService, PollVotation, Choice }       from "./polls.service";

@Component({
    selector: "app-poll",
    templateUrl: "poll.component.html"
    //directives:[CeiboShare]
})
export class PollComponent implements OnInit {
    
    private d3: D3;
    public poll: PollVotation;
    public choices: ValueLabelPair[];
    public selectedChoice: ValueLabelPair;
    private baseColors = [
          "red", "blue", "green", "gray", "magenta",
          "tomato", "pink", "steelblue", "orchdid", "black"
        ];
    private display = 'none';
    public isCustomChoice = false;
    public customValue = "";
    public repoUrl = "";
    
    @ViewChild('custom') customInput: ElementRef;
    @ViewChild('choice') choiceInput: ElementRef;
    
    constructor(private pollsService: PollsService,
                private route: ActivatedRoute,
                private router: Router,
                private d3Service: D3Service,
                private sanitizer: DomSanitizer) { 
                    this.d3 = d3Service.getD3()
                }
                
    updateView(poll: PollVotation, userId: string, next?: () => void){
        this.poll = poll;
        this.repoUrl = PollsService.baseUrl + "/view/" + this.poll.id;
        let choices: ValueLabelPair[] = poll.choices.map((item) => {
           return new ValueLabelPair(item.id, item.name); 
        });
        if(userId){
            choices.push(new ValueLabelPair("custom", "I'd like a custom option..."));   
        }
        this.choices = choices;
        this.updateChart();
        if(next){
            next();
        }
    }
    
    ngOnInit() {
        this.route.params.subscribe((params) => {
            const id = params['id'];
            this.pollsService.getPoll(id)
                .subscribe((poll: PollVotation) => {
                    this.updateView(poll, this.getUserId());
                }); 
        });
    }
    
    vote(item: ValueLabelPair, next?: () => void){
        const choice = new Choice(item.value, item.label, 1);
        this.pollsService.vote(this.poll.id, choice)
            .subscribe((poll: PollVotation) => {
                this.pollsService.getPoll(poll.id)
                .subscribe((poll: PollVotation) => {
                    this.updateView(poll, this.getUserId(), next);
                }); 
            }); 
    }
    
    voteCustom() {
        if(this.customInput.nativeElement.value){
            this.vote(new ValueLabelPair("custom", this.customInput.nativeElement.value), () => {
                this.selectedChoice = this.choices.find((item) => {
                    return (item.label === this.customInput.nativeElement.value);
                });
                this.isCustomChoice = false;
            });
        }
    }
    
    delete() {
        this.display = 'block';
    }
    
    onClose(){
        this.display = 'none';
    }
    
    onAceptDelete(){
        this.display = 'none';
        this.pollsService.deletePoll(this.poll.id)
            .subscribe((res) => {
                console.log(res);
                this.router.navigateByUrl("/mypolls");
            });
    }
    
    getUserId(){
        return localStorage.getItem('userId');
    }
    
    getColor(i: number) {
        return this.sanitizer.bypassSecurityTrustStyle("color:" + this.baseColors[i]);
    }
    
    isVotable(selected){
        return selected ? "" : "disabled";
    }
    
    selectChoice(selected: ValueLabelPair){
        this.isCustomChoice = (selected.value === "custom");
    }
    
    updateChart(){
        let data = this.poll.choices.map((choice) => {
            return choice.votes;
        });
        
        let canvas = document.querySelector("canvas"),
            context = canvas.getContext("2d");
            
        // Store the current transformation matrix
        context.save();
        
        // Use the identity matrix while clearing the canvas
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        let width = canvas.width,
            height = canvas.height,
            radius = Math.min(width, height) / 2;
        
        //use the sane set of colors over all the data
        var colors = [];
        var n = 0;
        for(var i = 0; i < data.length; i++){
            colors.push(this.baseColors[n]);
            n += n + 1 === this.baseColors.length ? 0 : 1;
        }
        
        var arc = this.d3.arc()
            .outerRadius(radius - 10)
            .innerRadius(0)
            .padAngle(0.03)
            .context(context);
        
        var pie = this.d3.pie();
        
        var arcs = pie(data);
        
        context.translate(width / 2, height / 2);
        
        context.globalAlpha = 0.5;
        arcs.forEach(function(d, i) {
          context.beginPath();
          arc(d);
          context.fillStyle = colors[i];
          context.fill();
        });
        
        context.globalAlpha = 1;
        context.beginPath();
        arcs.forEach(arc);
        context.lineWidth = 1.5;
        context.stroke();
        
        // Restore the transform
        context.restore();
    }
    
}