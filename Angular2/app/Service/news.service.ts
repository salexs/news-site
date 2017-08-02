import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { AuthServices } from '../Service/auth-service.service';
import { News } from '../Models/newsModel';


@Injectable()
export class NewsService {

    constructor(private http: Http, private authService: AuthServices) { }


    getData(currentUser: string): Observable<any> {
        if (JSON.parse(localStorage.getItem('currentUser'))) {
            let headers = new Headers({ 'Authorization': 'JWT  ' + JSON.parse(localStorage.getItem('currentUser')).token });
            var options = new RequestOptions({ headers: headers });
        } else {
            var options = new RequestOptions({});
        }

        if (currentUser == undefined) {
            return this.http.get('http://localhost:8000/api/news/', options)
                .map((resp: Response) => resp.json())
                .catch((error: any) => { return Observable.throw(error); });
        } else {
            return this.http.get('http://localhost:8000/api/news/' + currentUser + '/', options)
                .map((resp: Response) => resp.json())
                .catch((error: any) => { return Observable.throw(error); });
        }

    }
    delNews(id: string): Observable<any> {
        if (JSON.parse(localStorage.getItem('currentUser'))) {
            let headers = new Headers({ 'Authorization': 'JWT  ' + JSON.parse(localStorage.getItem('currentUser')).token });
            var options = new RequestOptions({ headers: headers });
        } else {
            var options = new RequestOptions({});
        }

        return this.http.delete('http://localhost:8000/api/news/delete/' + id + '/', options)
            .map((resp: Response) => resp.json())
            .catch((error: any) => { return Observable.throw(error); });

    }
    createNews(obj: any): Observable<any> {
        if (JSON.parse(localStorage.getItem('currentUser'))) {
            let headers = new Headers({ 'Authorization': 'JWT  ' + JSON.parse(localStorage.getItem('currentUser')).token, 'Content-Type': 'application/json;charset=utf-8' });
            var options = new RequestOptions({ headers: headers });
        } else {
            var options = new RequestOptions({});
        }
        const body = JSON.stringify(obj);
        return this.http.post('http://localhost:8000/api/news/create/', body, options)
            .map((resp: Response) => resp.json())
            .catch((error: any) => { return Observable.throw(error); });

    }
}