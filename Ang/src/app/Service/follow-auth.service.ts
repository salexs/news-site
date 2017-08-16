import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
 
@Injectable()
export class FollowAuthService {
    private subject = new Subject<any>();
 
    setToken(name: string) {
        this.subject.next(name);
    }
 
    clearLS() {
        this.subject.next();
    }
 
    getLS(): Observable<any> {
        return this.subject.asObservable();
    }
}
