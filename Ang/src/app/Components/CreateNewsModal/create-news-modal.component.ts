import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { NewsService } from '../../Service/news.service';
import { Component, Input,OnInit, TemplateRef } from '@angular/core';

export class Tags {
    text = '';
}

@Component({
    moduleId: module.id,
    selector: 'address',
    template: `
            <div [formGroup]="tagsForm">
                <div class="form-group col-xs-4">
                    <label>Text</label>
                    <input type="text" class="form-control" formControlName="text">
                </div>
            </div>
    `,
})
export class TagsComponent {
    @Input('group')
    public tagsForm: FormGroup;
}

@Component({
    selector: 'demo-modal-service-component',
    templateUrl: './create-news-modal.html'
})
export class DemoModalServiceFromComponent {
    bsModalRef: BsModalRef;
    constructor(private modalService: BsModalService, private fb: FormBuilder) { }

    public openModalWithComponent() {
        let form = this.fb.group({
            title: new FormControl(),
            text: new FormControl(),
            tags: this.fb.array([])
        });
        this.bsModalRef = this.modalService.show(ModalContentComponent);
        this.bsModalRef.content.form = form;
    }
}

/* This is a component which we pass in modal*/

@Component({
    selector: 'modal-content',
    template: `
        <div class="modal-header">
            <h4 class="modal-title pull-left">Create News</h4>
            <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form [formGroup]="form" (ngSubmit)="onSubmit()">
            <label>Title:</label>
            <input formControlName="title">
            <hr>
            <label>News text:</label>
            <textarea [froalaEditor] formControlName="text"></textarea>
            <hr>
            <form formArrayName="tags">
                <label>Tags:</label>
                <div *ngFor="let tag of form.controls.tags.controls; let i=index" class="panel panel-default">
                    <span>Tags {{i + 1}}</span>
                    <div class="panel-body" [formGroupName]="i">
                        <address [group]="form.controls.tags.controls[i]"></address>
                    </div>
                </div>
                <div>
                <a (click)="addTags()" style="cursor: default">
                    Add another tags +
                </a>
                </div>
            </form>
            <button type="submit" (click)="bsModalRef.hide()">Submit</button>
            </form>
        </div>
  `
})
export class ModalContentComponent {
    constructor(private newsService: NewsService, public bsModalRef: BsModalRef, private fb: FormBuilder) { }
    public form: FormGroup = this.fb.group({
        title: new FormControl(),
        text: new FormControl(),
        tags: this.fb.array([])
    });

    initTags() {
        return this.fb.group({
            text: ['']
        });
    }

    addTags() {
        const control = <FormArray>this.form.controls['tags'];
        const addrCtrl = this.initTags();

        control.push(addrCtrl);

    }
    
    save(model: any) {
        // call API to save
        // ...
        console.log(model);
    }
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