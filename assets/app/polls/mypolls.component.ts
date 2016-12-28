import { Component, OnInit }        from "@angular/core";
import { PollsService, Poll } from "./polls.service";
import { Router }            from '@angular/router';

@Component({
    selector: "app-mypolls",
    template: `
    <div class="panel panel-default">
        <div class="panel-heading"><h2>My Polls</h2></div>
        <div class="panel-body">
            <p>Below are polls hosted by fcc-voting.</p>
            <p>Select a poll to see the results and vote, or make a <a routerLink="/polls/create">new poll!</a></p>
        </div>
        <ul class="list-group">
            <li class="list-group-item btn" *ngFor="let poll of polls" (click)="gotoPoll(poll)">
                {{poll.title}}
            </li>
        </ul>
    </div>
    `
})
export class MyPollsComponent implements OnInit {
    polls: Poll[];
    
    constructor(private pollsService: PollsService, private router: Router) { }
    
    ngOnInit() {
        this.pollsService.getMyPolls().subscribe((polls: Poll[]) => {
            this.polls = polls;
        });
    }
    
    gotoPoll(poll: Poll) {
        let link = ['/polls', poll.id];
        this.router.navigate(link);
    }
}