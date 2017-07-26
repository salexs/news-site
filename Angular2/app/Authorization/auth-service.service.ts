import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { User } from './user'


@Injectable()
export class AuthService {
    public token: string;
    constructor(private http: Http) { 
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    postData(obj: User): Observable<any> {
        const body = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        return this.http.post("http://localhost:8000/api/users/gettoken/", body, { headers: headers })
            .map((resp: Response) => {
                let token = resp.json();
                localStorage.setItem('currentUser', JSON.stringify({ token: token.token }));
                return true
            })
            .catch((error: any) => { return Observable.throw(error.json()); });
    }

}