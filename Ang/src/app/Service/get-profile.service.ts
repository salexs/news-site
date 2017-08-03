import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ProfileService {
    constructor(private http: Http) { }

    GetProfile(username:string): Observable<any> {
        if (JSON.parse(localStorage.getItem('currentUser'))) {
            let headers = new Headers({ 'Authorization': 'JWT  ' + JSON.parse(localStorage.getItem('currentUser')).token });
            var options = new RequestOptions({ headers: headers });
        } else {
            var options = new RequestOptions({});
        }


        return this.http.get('http://localhost:8000/api/profile/'+username+'/', options)
            .map((resp: Response) => resp.json())
            .catch((error: any) => { return Observable.throw(error); });

    }
}