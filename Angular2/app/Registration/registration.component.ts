import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './registration-service.service';
import { Response } from '@angular/http';
import { User } from './user'
import { Router } from '@angular/router';
import { AlertService } from '../StatusAuth/status.service'

@Component({
    selector: 'registration',
    template: `
        
        <div class="row auth">
            <span *ngIf="user_obj">
                Hello, {{user_obj.username}}
            </span>
            <div class="col-md-6 col-md-offset-3">
                <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">Username</label>
                    <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail3" placeholder="Username" [(ngModel)]="user.username">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
                    <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail3" placeholder="Email" [(ngModel)]="user.email">
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
                    <button type="submit" class="btn btn-default" (click)="registr(user)">Войти</button>
                    </div>
                </div>
            </div>
        </div>

     `,
    providers: [RegistrationService]
})


export class RegistrationComponent {
    constructor(private registrationService: RegistrationService, private router: Router, private alertService: AlertService) { }
    user: User = new User;
    registr(user: User) {
        this.registrationService.postData(user)
            .subscribe(
            data => {
                this.router.navigate(['login']);
                this.alertService.success('Registration successful', true);
            },
            error => {
                this.alertService.error('Incorrect form field');
            }
            );
    }

}