import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';
import { CommonModule }             from '@angular/common';
import { ReactiveFormsModule }      from '@angular/forms';

import { D3Service }                from 'd3-ng2-service';
import { CeiboShare }               from "ng2-social-share";

import { AppComponent }             from "./app.component";
import { AppRoutingModule }         from "./app.routing";
import { PollsListComponent }       from "./polls/polls-list.component";
import { PollCreateComponent }      from "./polls/poll-create.component";
import { PollComponent }            from "./polls/poll.component";
import { MyPollsComponent }         from "./polls/mypolls.component";
import { SigninComponent }          from "./auth/signin.component";
import { SignupComponent }          from "./auth/signup.component";
import { ErrorComponent }           from "./errors/error.component";

import { DropdownComponent }        from "./controls/dropdown-control.component";

import { ErrorService }             from "./errors/error.service";
import { PollsService }             from "./polls/polls.service";
import { AuthService }              from "./auth/auth.service";

@NgModule({
    declarations: [ AppComponent, 
                    PollsListComponent,
                    PollCreateComponent,
                    PollComponent,
                    MyPollsComponent,
                    DropdownComponent,
                    SigninComponent,
                    SignupComponent,
                    ErrorComponent,
                    CeiboShare
    ],
    imports: [  BrowserModule, 
                AppRoutingModule,
                FormsModule,
                HttpModule,
                CommonModule,
                ReactiveFormsModule
    ],
    providers: [ErrorService,
                PollsService,
                D3Service,
                AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {

}