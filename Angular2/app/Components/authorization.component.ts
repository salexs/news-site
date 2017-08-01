import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth-service.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { User } from '../Models/authorizationModel';
import { AlertService } from '../Service/status.service'

@Component({
    moduleId: module.id,
    selector: 'authorization',
    styleUrls: ['./authorization.component.css'],
    templateUrl: './authorization.template.html',
    providers: [AuthService]
})


export class AuthorizationComponent implements OnInit {
    constructor(private authService: AuthService, private router: Router, private alertService: AlertService) { }

    user: User = new User;
    user_obj: User;
    ngOnInit() {
        this.authService.logout()
    }
    check(user: User) {
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