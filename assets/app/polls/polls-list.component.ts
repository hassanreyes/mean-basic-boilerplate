import { Component, OnInit }    from "@angular/core";
import { PollsService, Poll }   from "./polls.service";
import { AuthService }          from "../auth/auth.service";
import { Router }               from '@angular/router';

@Component({
    selector: 'app-polls-list',
    template: `
    <div class="panel panel-default">
        <div class="panel-heading"><h2>Complete Polls list</h2></div>
        <div class="panel-body">
            <p>Below are polls hosted by fcc-voting.</p>
            <p>Select a poll to see the results and vote
                <span *ngIf="isLoggedIn()">
                , or make a <a routerLink="/polls/create">new poll!</a>
                </span>
            </p>
        </div>
        <ul class="list-group">
            <li class="list-group-item btn" *ngFor="let poll of polls" (click)="gotoPoll(poll)">
                {{poll.title}}
            </li>
        </ul>
    </div>
    `
})
export class PollsListComponent implements OnInit {
    polls: Poll[];
    
    constructor(private pollsService: PollsService, 
                private router: Router,
                private authService:AuthService) { }
    
    ngOnInit() {
        this.pollsService.getPolls().subscribe((polls: Poll[]) => {
            this.polls = polls;
        });
    }
    
    gotoPoll(poll: Poll) {
        let link = ['/polls', poll.id];
        this.router.navigate(link);
    }
    
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}