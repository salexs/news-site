import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
import {User} from '../Models/registrationModel';

@Injectable()
export class RegistrationService {
    constructor(private http: Http) { }

    postData(obj: any): Observable<any>{
        const body = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        return this.http.post("http://localhost:8000/api/users/registration/",body,{headers:headers})
                                .map((resp:Response)=>resp.json())
                                .catch((error:any) =>{return Observable.throw(error);}); 
    }
}