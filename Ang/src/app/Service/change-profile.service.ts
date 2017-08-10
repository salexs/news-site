import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { FollowAuthService } from './follow-auth.service';

@Injectable()
export class ChangeProfileService {
    public token: string;
    constructor(private http: Http, private followAuthService: FollowAuthService) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser')).username;
    }
    updateProfile(form: any): Observable<any> {
        const body = JSON.stringify(form);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        return this.http.put("http://localhost:8000/api/profile/update/" + JSON.parse(localStorage.getItem('currentUser')).username + "/", body, { headers: headers })
            .map((resp: Response) => {
                resp.json()
            })
            .catch((error: any) => { return Observable.throw(error.json()); });
    }
    upload(fileToUpload: any): Observable<any> {
        let form = new FormData();
        form.append('file', fileToUpload);
        return this.http.post("http://localhost:8000/api/profile/update-avatar/" + JSON.parse(localStorage.getItem('currentUser')).username + "/", form)
            .map((resp: Response) => {
                resp.json()
            })
            .catch((error: any) => { return Observable.throw(error.json()); });
    }
}