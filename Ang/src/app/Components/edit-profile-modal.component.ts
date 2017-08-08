import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { NewsService } from '../Service/news.service';
import { Component, OnInit,TemplateRef } from '@angular/core';

@Component({
    selector: 'edit-modal-service-component',
    templateUrl: './edit-modal.html'
})
export class EditModalServiceFromComponent {
    bsModalRef: BsModalRef;
    constructor(private modalService: BsModalService) { }

    public opensModalWithComponent() {
        let forms = new FormGroup({
            first_name: new FormControl(),
            last_name: new FormControl(),
            email: new FormControl(),
            experience: new FormControl(),
            location: new FormControl(),
            birth_date: new FormControl(),
            about_myself: new FormControl(),
            skills: new FormControl()
        });
        this.bsModalRef = this.modalService.show(EditModalContentComponent);
        this.bsModalRef.content.forms = forms;
    }
}

/* This is a component which we pass in modal*/

@Component({
    selector: 'edit-modal-content',
    template: `
<form class="form-horizontal main_form text-left" action=" " method="post"  id="contact_form">
<fieldset>


    <div class="form-group col-md-10">
    <label class="col-md-6 control-label">First Name</label>  
    <div class="col-md-9 inputGroupContainer">
    <div class="input-group">
    <input  name="first_name" placeholder="First Name" class="form-control"  type="text">
        </div>
    </div>
    </div>

    <!-- Text input-->

    <div class="form-group col-md-6">
    <label class="col-md-6 control-label" >Last Name</label> 
        <div class="col-md-8 inputGroupContainer">
        <div class="input-group">
    <input name="last_name" placeholder="Last Name" class="form-control"  type="text">
        </div>
    </div>
    </div>

    <!-- Text input-->
        <div class="form-group col-md-12">
    <label class="col-md-10 control-label">E-Mail</label>  
        <div class="col-md-12 inputGroupContainer">
        <div class="input-group">
    <input name="email" placeholder="E-Mail Address" class="form-control"  type="text">
        </div>
    </div>
    </div>


    <!-- Text input-->
        
    <div class="form-group col-md-12">
    <label class="col-md-10 control-label">Phone #</label>  
        <div class="col-md-12 inputGroupContainer">
        <div class="input-group">
    <input name="phone" placeholder="(845)555-1212" class="form-control" type="text">
        </div>
    </div>
    </div>

    <!-- Text input-->
        
    <div class="form-group col-md-12">
    <label class="col-md-10 control-label">Address</label>
        <div class="col-md-12 inputGroupContainer">
        <div class="input-group">
                <textarea class="form-control" name="comment" placeholder="Project Description"></textarea>
    </div>
    </div>
    </div>

    <div class="form-group col-md-12">
    <label class="col-md-10 control-label">Project Description</label>
        <div class="col-md-12 inputGroupContainer">
        <div class="input-group">
                <textarea class="form-control" name="comment" placeholder="Project Description"></textarea>
    </div>
    </div>
    </div>
    </fieldset>
</form>
  `
})
export class EditModalContentComponent {
    constructor(private newsService: NewsService, public bsModalRef: BsModalRef) { }
    public forms: FormGroup = new FormGroup({
        first_name: new FormControl(),
        last_name: new FormControl(),
        email: new FormControl(),
        experience: new FormControl(),
        location: new FormControl(),
        birth_date: new FormControl(),
        about_myself: new FormControl(),
        skills: new FormControl()
    });
    onSubmit() {
        console.log(this.forms.value)
    }
}