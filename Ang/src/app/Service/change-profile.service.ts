import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ChangeProfileService {
    public token: string;
    constructor(private http: Http) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser')).username;
    }
    updateProfile(form: any): Observable<any> {
        const body = JSON.stringify(form);
        if (JSON.parse(localStorage.getItem('currentUser'))) {
            let headers = new Headers({ 'Authorization': 'JWT  ' + JSON.parse(localStorage.getItem('currentUser')).token, 'Content-Type': 'application/json;charset=utf-8' });
            var options = new RequestOptions({ headers: headers });
        } else {
            var options = new RequestOptions({});
        }
        return this.http.put("http://localhost:8000/api/profile/update/" + JSON.parse(localStorage.getItem('currentUser')).username + "/", body, options)
            .map((resp: Response) => {
                let data = resp.json()
                
                console.log('datas',data)
                return data
                
            })
            .catch((error: any) => { return Observable.throw(error.json()); });
    }
    upload(fileToUpload: any): Observable<any> {
        let form = new FormData();
        form.append('file', fileToUpload);
        if (JSON.parse(localStorage.getItem('currentUser'))) {
            let headers = new Headers({ 'Authorization': 'JWT  ' + JSON.parse(localStorage.getItem('currentUser')).token});
            var options = new RequestOptions({ headers: headers });
        } else {
            var options = new RequestOptions({});
        }
        return this.http.put("http://localhost:8000/api/profile/update-avatar/" + JSON.parse(localStorage.getItem('currentUser')).username + "/", form, options)
            .map((resp: Response) => {
                resp.json()
            })
            .catch((error: any) => { return Observable.throw(error.json()); });
    }
}