import { Component, DoCheck, OnInit, OnChanges, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../Service/get-profile.service';
import { ChangeProfileService } from '../../Service/change-profile.service'


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
    @ViewChild("fileInput") fileInput;


    constructor(private activateRoute: ActivatedRoute, private profileService: ProfileService, private changeProfileService: ChangeProfileService) {
        this.currentUser = activateRoute.snapshot.params['username'];
    }
    ngOnInit() {

        this.permission = JSON.parse(localStorage.getItem('currentUser')).username == this.currentUser;
        this.profileService.GetProfile(this.currentUser).subscribe(
            data => {
                
                this.user = data
                localStorage.setItem('avatar',data.avatar);
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