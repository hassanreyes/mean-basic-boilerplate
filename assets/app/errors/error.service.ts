import  { EventEmitter } from "@angular/core";

export class Error {
    constructor(public title: String, public message: String) {}
}

export class ErrorService {
    public errorOcurred = new EventEmitter<Error>();
    
    handleError(error: any){
        console.error(error);
        const errorData = new Error(error.title, error.message);
        this.errorOcurred.emit(errorData);
    }
}