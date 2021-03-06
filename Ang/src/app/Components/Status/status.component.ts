import { Component, OnInit } from '@angular/core';

import { AlertService } from '../../Service/status.service';

@Component({
    moduleId: module.id,
    selector: 'alert',
    templateUrl: './status.template.html',
})

export class AlertComponent {
    message: any;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }
}