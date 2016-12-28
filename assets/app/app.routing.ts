import { NgModule }                 from    "@angular/core";
import { RouterModule, Routes }     from    "@angular/router";

import { PollsListComponent }       from    "./polls/polls-list.component";
import { PollCreateComponent }      from    "./polls/poll-create.component";
import { PollComponent }            from    "./polls/poll.component";
import { MyPollsComponent }         from    "./polls/mypolls.component";
import { SigninComponent }          from    "./auth/signin.component";
import { SignupComponent }          from    "./auth/signup.component";

const routes: Routes = [
    { path: '', redirectTo: 'polls', pathMatch: 'full' },
    { path: 'polls', component: PollsListComponent, pathMatch: 'full'},
    { path: 'polls/create', component: PollCreateComponent, pathMatch: 'full' },
    { path: 'mypolls', component: MyPollsComponent, pathMatch: 'full' },
    { path: 'polls/view/:id', component: PollComponent },
    { path: 'polls/:id', component: PollComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}