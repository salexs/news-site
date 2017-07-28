import { Component,OnInit } from '@angular/core';
import { AuthService } from './auth-service.service';
import { Response} from '@angular/http';
import {Router} from '@angular/router';
import {User} from './user' ;
import {AlertService} from '../StatusAuth/status.service'

@Component({
    selector: 'authorization',
    styleUrls: ['app/Authorization/authorization.component.css'],
    template: `
        
        <div class="row auth">
            <div class="col-md-4 col-md-offset-3"><h2>Authorization</h2></div>
            <div class="col-md-4 col-md-offset-3">
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


export class AuthorizationComponent implements OnInit {
    constructor(private authService: AuthService,private router: Router,private alertService: AlertService) {}
    
    user: User = new User;
    user_obj: User;
    ngOnInit(){
        this.authService.logout()
    }
    check(user:User) {
        this.authService.postData(user)
                .subscribe(
                    data => {
                        this.router.navigate(['']);
                    },
                    error => {
                        console.log(error)
                        this.alertService.error(error);
                    }
                );
    }   

}