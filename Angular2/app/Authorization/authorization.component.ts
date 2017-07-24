import { Component,OnInit } from '@angular/core';
import { AuthService } from './auth-service.service';
import { Response} from '@angular/http';
import {User} from './user'

@Component({
    selector: 'authorization',
    styleUrls: ['app/Authorization/authorization.component.css'],
    template: `
        
        <div class="row auth">
            <span *ngIf="user_obj">
                Hello, {{user_obj.username}}
            </span>
            <div class="col-md-6 col-md-offset-3">
                <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
                    <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail3" placeholder="Email" [(ngModel)]="user.username">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPassword3" class="col-sm-2 control-label">Пароль</label>
                    <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword3" placeholder="Password" [(ngModel)]="user.password">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-default" (click)="check(user)">Войти</button>
                    </div>
                </div>
            </div>
        </div>

     `,
     providers: [AuthService]
})


export class AuthorizationComponent {
    constructor(private authService: AuthService) {}
    user: User = new User;
    user_obj: User;

    check(user:User) {
        this.authService.postData(user)
                .subscribe((data) => {
                    console.log('sada')

                });
    }   

}