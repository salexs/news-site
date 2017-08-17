import { Component, DoCheck, OnInit, OnChanges, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../Service/get-profile.service';
import { ChangeProfileService } from '../../Service/change-profile.service'
import { Subscription } from 'rxjs/Subscription';
import { CheckProfileService } from '../../Service/subjects.service'

@Component({
    moduleId: module.id,
    selector: 'profile',
    styleUrls: ['./profile.component.css'],
    templateUrl: './profile.component.html',

})
export class Profile implements OnInit {

    currentUser: string;
    permission: boolean;
    user: any = {};
    subscription: Subscription;

    @ViewChild("fileInput") fileInput;


    constructor(private activateRoute: ActivatedRoute, private profileService: ProfileService, private checkProfileService: CheckProfileService, private changeProfileService: ChangeProfileService) {
        this.currentUser = activateRoute.snapshot.params['username'];
        this.subscription = this.checkProfileService.getProfile().subscribe(data => {this.GetProfile(); })
        this.permission = JSON.parse(localStorage.getItem('currentUser')).username == this.currentUser;
    }
    ngOnInit() {
        this.GetProfile();
    }
    GetProfile() {
        this.profileService.GetProfile(this.currentUser).subscribe(
            data => {
                this.user = data
            },
            error => { })
    }
    addFile() {
        let fi = this.fileInput.nativeElement;
        if (fi.files && fi.files[0]) {
            let fileToUpload = fi.files[0];
            this.changeProfileService.upload(fileToUpload).subscribe(
                data => {
                    this.profileService.GetProfile(this.currentUser).subscribe(
                        data => {
                            this.user = data
                        },
                        error => { })
                },
                error => { })
        }
    }
}