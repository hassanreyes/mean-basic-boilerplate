import { Component, Input, OnInit }            from "@angular/core";
import { Router }               from "@angular/router";
import { AuthService, User }    from "./auth/auth.service";

@Component ({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
    @Input()
    public pollId: string;
    
    constructor(private authService: AuthService, private router: Router) {}
    
    ngOnInit() {
        if(this.pollId){
            console.log("From twitter: "  + this.pollId);
            this.router.navigateByUrl('/polls/' + this.pollId);
        }
    }
    
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
    
    logout() {
        this.authService.logout();
        this.router.navigateByUrl('/');
    }
    
    getUserName() {
        return this.authService.getUserName();
    }
}