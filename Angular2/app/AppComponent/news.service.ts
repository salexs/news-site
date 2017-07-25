import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class NewsService{
 
    constructor(private http: Http){ }
    
     
    getData(): Observable<any> {

        return this.http.get('http://localhost:8000/api/news/')
                                                .map((resp:Response)=>resp.json())
                                                .catch((error:any) =>{return Observable.throw(error);}); 
    }
}