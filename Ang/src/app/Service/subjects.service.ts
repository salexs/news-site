import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
 
@Injectable()
export class FilterService {
    private subject = new Subject<any>();
 
    Search(SearchWord: string) {
        this.subject.next(SearchWord);
        console.log('asfdsaa',SearchWord)
    }
 
    clearSearch() {
        this.subject.next();
    }
 
    getSearch(): Observable<any> {
        return this.subject.asObservable();
    }
}

@Injectable()
export class CheckProfileService {
    private subject = new Subject<any>();
 
    ChangeProfile(obj: any) {
        this.subject.next(obj);
        console.log('asfdsaa',obj)
    }
 
    clearSearch() {
        this.subject.next();
    }
 
    getProfile(): Observable<any> {
        return this.subject.asObservable();
    }
}

@Injectable()
export class CheckNewsService {
    private subject = new Subject<any>();
 
    ChangeNews(obj: any) {
        this.subject.next(obj);
    }
 
    clearSearch() {
        this.subject.next();
    }
 
    getNews(): Observable<any> {
        return this.subject.asObservable();
    }
}