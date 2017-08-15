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