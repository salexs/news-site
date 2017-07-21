import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
    constructor(private http: Http) { }

    CheckAuth() {
        return this.http
            .get('http://localhost:8000/api/news/')
            .toPromise()
            .then(response=>console.log(response.json()))
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
  }
}