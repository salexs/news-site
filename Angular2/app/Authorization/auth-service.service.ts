import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { User } from './user'

@Injectable()
export class AuthService {
    constructor(private http: Http) { }

    postData(obj: User): Observable<any> {
        const body = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        return this.http.post("http://localhost:8000/api/users/login/", body, { headers: headers })
            .map((resp: Response) => {
                let username = resp.json();
                console.log(username)
                this.http.post("http://localhost:8000/api/users/gettoken/", body, { headers: headers })
                                                                                        .map((resp: Response) => {console.log(resp.json())})
            })
            .catch((error: any) => { return Observable.throw(error.json()); });
    }
}