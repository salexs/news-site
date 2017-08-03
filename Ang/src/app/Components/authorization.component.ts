import { Component, OnInit } from '@angular/core';
import { AuthServices } from '../Service/auth-service.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { User } from '../Models/authorizationModel';
import { AlertService } from '../Service/status.service';
import { AuthService } from "angular2-social-login";

@Component({
    moduleId: module.id,
    selector: 'authorization',
    styleUrls: ['./authorization.component.css'],
    templateUrl: './authorization.template.html',
    providers: [AuthService]
})


export class AuthorizationComponent implements OnInit {
    constructor(private authService: AuthServices, private router: Router, private alertService: AlertService,public _auth: AuthService) { }
    sub : any;
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
    signIn(provider:string){
    this.sub = this._auth.login(provider).subscribe(
      (data) => {
                  console.log(data);
                  //user data 
                  //name, image, uid, provider, uid, email, token (accessToken for Facebook & google, no token for linkedIn), idToken(only for google) 
                }
    )
  }

}