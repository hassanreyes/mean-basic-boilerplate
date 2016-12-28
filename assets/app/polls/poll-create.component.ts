import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { PollsService, Poll } from "./polls.service";

@Component({
    selector: 'app-poll-create',
    templateUrl: './poll-create.component.html'
})
export class PollCreateComponent {
    title:      String;
    choices:    String;
    
    constructor(private pollsService: PollsService) { }
    
    onSubmit(form: NgForm) {
        const poll = new Poll(form.value.title, form.value.choices);
        this.pollsService.createPoll(poll)
            .subscribe(
                (data) => { console.log(data); }
            );
        
        form.resetForm();
    }
};