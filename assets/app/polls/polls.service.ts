import { Injectable }               from "@angular/core";
import { Http, Response, Headers }  from "@angular/http";
import { Router }                   from "@angular/router";
import "rxjs/Rx";
import { Observable }               from "rxjs";
import { ErrorService }             from "../errors/error.service.ts";
import { ValueLabelPair }           from "../common/commons";

export class Choice {
    constructor(public id: string, public name: string, public votes: Number) {}
}

export class Poll {
    constructor(public title: String, public choices:string, public id?: String, public userId?: String) { }
}

export class PollVotation {
    constructor(public id: String, public title: String, public choices?: Choice[], public userId?: string) { }
}

@Injectable()
export class PollsService {
    private polls: Poll[] = [];
    public static baseUrl = 'https://camper-app-project-hassanreyes.c9users.io/polls';
    
    constructor(private http: Http, private errorService: ErrorService, private router: Router) { }

    getPolls(){
        return this.http.get(PollsService.baseUrl)
            .map((response: Response) => {
                const polls = response.json().data;
                let viewModelPolls: Poll[] = [];
                for(let poll of polls){
                    viewModelPolls.push(new Poll(poll.title, null, poll._id, null));
                }
                this.polls = viewModelPolls;
                return viewModelPolls;
            })
            .catch((err) => {
                this.errorService.handleError(err.json());
                return Observable.throw(err.json());
            });
    }
    
    getMyPolls(){
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.get(PollsService.baseUrl + "/mypolls" + token)
            .map((response: Response) => {
                const polls = response.json().data;
                let viewModelPolls: Poll[] = [];
                for(let poll of polls){
                    viewModelPolls.push(new Poll(poll.title, null, poll._id, null));
                }
                this.polls = viewModelPolls;
                return viewModelPolls;
            })
            .catch((err) => {
                this.errorService.handleError(err.json());
                return Observable.throw(err.json());
            });
    }
    
    createPoll(poll: Poll){
        const body = JSON.stringify(poll);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post(PollsService.baseUrl + token, body, { headers: headers })
            .map((res: Response) => {
                const result = res.json();
                let id = String(result.data._id);
                this.router.navigate(['polls', id]);
            })
            .catch((err: Response) => {
               this.errorService.handleError(err.json());
               return Observable.throw(err.json());
            });
    }
    
    getPoll(id: String){
        const url = `${PollsService.baseUrl}/${id}`;
        return this.http.get(url)
            .map((res: Response) => {
                const poll = res.json().data;
                return new PollVotation(poll._id, poll.title, poll.choices.map((choice) => {
                    return new Choice(choice._id, choice.name, choice.votes);
                }), poll.user);
            })
            .catch((err) => {
                this.errorService.handleError(err.json());
                return Observable.throw(err.json());
            });
    }
    
    vote(id: String, choice: Choice){
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        const url = `${PollsService.baseUrl}/${id}/${token}`;
        const body = JSON.stringify({ id: id, choice: choice });
        const headers = new Headers({'Content-Type': 'application/json'});
        
        return this.http.patch(url, body, { headers: headers })
            .map((res: Response) => {
                const poll = res.json().data;
                return new PollVotation(poll._id, poll.title, poll.choices.map((choice) => {
                    return new Choice(choice._id, choice.name, choice.votes);
                }));
            })
            .catch((err) => {
                this.errorService.handleError(err.json());
                return Observable.throw(err.json());
            })
    }
    
    deletePoll(id){
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        const url = `${PollsService.baseUrl}/${id}/${token}`;
        return this.http.delete(url)
            .map((res: Response) => {
                res.json();
            })
            .catch((err: Response) => {
                this.errorService.handleError(err.json());
                return Observable.throw(err.json());
            });
    }
}