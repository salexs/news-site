import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { NewsService } from '../../Service/news.service';
import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { ChangeProfileService } from '../../Service/change-profile.service'
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'edit-modal-service-component',
    templateUrl: './edit-modal.html'
})
export class EditModalServiceFromComponent {
    bsModalRef: BsModalRef;
    constructor(private modalService: BsModalService, private fb: FormBuilder) { }
    @Input() user: any;
    public opensModalWithComponent() {
        let profileForm = this.fb.group({
            username: this.user.username,
            first_name: this.user.first_name,
            last_name: this.user.last_name,
            email: this.user.email,
            profile: this.fb.group({
                experience: this.user.profile.experience,
                location: this.user.profile.location,
                birth_date: this.user.profile.birth_date,
                about_myself: this.user.profile.about_myself,
                skills: this.user.profile.skills,
            })
        });
        this.bsModalRef = this.modalService.show(EditModalContentComponent);
        this.bsModalRef.content.profileForm = profileForm;
    }
}


@Component({
    selector: 'edit-modal-content',
    template: `
    <div class="modal-header">
      <h4 class="modal-title pull-left">Edit Profile</h4>
      <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
        <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
                <div class="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input class="form-control" formControlName="username" placeholder="Username">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">First Name</label>
                    <input class="form-control" formControlName="first_name" placeholder="First Name">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Last Name</label>
                    <input class="form-control" formControlName="last_name" placeholder="Last Name">
                </div>
                <form formGroupName="profile">
                    <div class="form-group">
                        <label for="exampleInputPassword1">Experience</label>
                        <input class="form-control" formControlName="experience" placeholder="Experience">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Location</label>
                        <input class="form-control" formControlName="location" placeholder="Location">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">About myself</label>
                        <textarea class="form-control" rows="5" formControlName="about_myself" placeholder="About myself"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Birth Date</label>
                        <input type="date" class="form-control" formControlName="birth_date" placeholder="Birth Date">
                    </div>
                </form>
                <button type="submit" class="btn btn-default" (click)="bsModalRef.hide()">Submit</button>
        </form>
    </div>
  `
})
export class EditModalContentComponent {
    constructor(private activateRoute: ActivatedRoute, private newsService: NewsService, public bsModalRef: BsModalRef, private fb: FormBuilder, private changeProfileService: ChangeProfileService) { }
    public profileForm: FormGroup = this.fb.group({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        profile: this.fb.group({
            experience: '',
            location: '',
            birth_date: '',
            about_myself: '',
            skills: '',
        })
    });
    onSubmit() {
        this.changeProfileService.updateProfile(this.profileForm.value).subscribe(
            (data) => {
                
            },
            (error) => { }
        )
        console.log(this.profileForm.value)
    }
}

