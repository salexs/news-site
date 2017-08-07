import { Component, DoCheck, OnInit, OnChanges, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../Service/get-profile.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { NewsService } from '../Service/news.service'
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
    selector: 'demo-modal-service-component',
    templateUrl: './modal.html'
})
export class DemoModalServiceFromComponent {
    bsModalRef: BsModalRef;
    constructor(private modalService: BsModalService) { }

    public openModalWithComponent() {
        let form = new FormGroup({
            title: new FormControl(),
            text: new FormControl()

        });
        this.bsModalRef = this.modalService.show(ModalContentComponent);
        this.bsModalRef.content.form = form;
    }
}

/* This is a component which we pass in modal*/

@Component({
    selector: 'modal-content',
    template: `
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <input formControlName="title">
        <textarea [froalaEditor] formControlName="text"></textarea>
        <button type="submit">Submit</button>
        </form>
  `
})
export class ModalContentComponent {
    constructor(private newsService:NewsService,public bsModalRef: BsModalRef){ }
    public form : FormGroup = new FormGroup({
            title: new FormControl(),
            text: new FormControl()
    });
    onSubmit() {
        console.log(this.form.value)
        this.newsService.createNews(this.form.value).subscribe(
            data => {
            },
            error => {

            }

        );
    }
}

@Component({
    moduleId: module.id,
    selector: 'profile',
    styleUrls: ['./profile.component.css'],
    templateUrl: './profile.component.html',

})
export class Profile implements OnInit {
    currentUser: string;
    user: any = {};
    constructor(private activateRoute: ActivatedRoute, private profileService: ProfileService) {
        this.currentUser = activateRoute.snapshot.params['username'];
    }
    ngOnInit() {
        this.profileService.GetProfile(this.currentUser).subscribe(
            data => {
                this.user = data
                console.log(this.user.first_name)
            },
            error => { })
    }
}