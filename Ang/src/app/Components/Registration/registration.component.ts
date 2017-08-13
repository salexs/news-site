import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../Service/registration-service.service';
import { Response } from '@angular/http';
import { User } from '../../Models/registrationModel';
import { Router } from '@angular/router';
import { AlertService } from '../../Service/status.service';

@Component({
    selector: 'registration',
    moduleId: module.id,
    templateUrl: './registration.template.html',
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