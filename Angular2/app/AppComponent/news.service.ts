import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import {AuthService} from '../Authorization/auth-service.service'


@Injectable()
export class NewsService {

    constructor(private http: Http, private authService: AuthService) { }


    getData(): Observable<any> {
        console.log(JSON.parse(localStorage.getItem('currentUser')))
        let headers = new Headers({ 'Authorization': 'JWT  ' + JSON.parse(localStorage.getItem('currentUser')).token });
        let options = new RequestOptions({ headers: headers });
        return this.http.get('http://localhost:8000/api/news/',options)
            .map((resp: Response) => resp.json())
            .catch((error: any) => { return Observable.throw(error); });
    }
}