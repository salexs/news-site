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
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input class="form-control" placeholder="Username">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Last Name</label>
    <input  placeholder="Last Name">
  </div>
  <div class="form-group">
    <label for="exampleInputFile">File input</label>
    <input type="file" id="exampleInputFile">
    <p class="help-block">Example block-level help text here.</p>
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox"> Check me out
    </label>
  </div>
  <button type="submit" class="btn btn-default">Submit</button>
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

//Examined in detail with the serializers and views Django frameworks to extend the base functionality of the Django user model.
//On the server (Python/Django) added to the basic model of the new user field associated with the user profile