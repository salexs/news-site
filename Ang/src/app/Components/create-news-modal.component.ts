import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { NewsService } from '../Service/news.service';
import { Component, OnInit,TemplateRef } from '@angular/core';

@Component({
    selector: 'demo-modal-service-component',
    templateUrl: './create-news-modal.html'
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
    constructor(private newsService: NewsService, public bsModalRef: BsModalRef) { }
    public form: FormGroup = new FormGroup({
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