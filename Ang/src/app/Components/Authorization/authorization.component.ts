import { Component, OnInit } from '@angular/core';
import { AuthServices } from '../../Service/auth-service.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { User } from '../../Models/authorizationModel';
import { AlertService } from '../../Service/status.service';
import { AuthService } from "angular2-social-login";
import {RegistrationService} from '../../Service/registration-service.service'

@Component({
    moduleId: module.id,
    selector: 'authorization',
    styleUrls: ['./authorization.component.css'],
    templateUrl: './authorization.template.html',
    providers: [AuthService]
})


export class AuthorizationComponent implements OnInit {
    constructor(private authService: AuthServices,private registrationService:RegistrationService, private router: Router, private alertService: AlertService, public _auth: AuthService) { }
    sub: any;
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
    signIn(provider: string) {
        console.log(provider)
        this.sub = this._auth.login(provider).subscribe(
            (data) => {
                let email = data['email']
                let username = email.slice(0, email.indexOf("@"))
                let password = data['uid'];
                let user = {"username":username,"email":email,"password":password}
                this.registrationService.postData(user)
                    .subscribe(
                    data => {
                        this.router.navigate(['']);
                        
                        this.alertService.success('Registration successful', true);
                    },
                    error => {
                        this.alertService.error('Incorrect form field');
                    }
                    );
                

                //user data 
                //name, image, uid, provider, uid, email, token (accessToken for Facebook & google, no token for linkedIn), idToken(only for google) 
            }
        )
    }

}