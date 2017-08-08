import { Component, DoCheck, OnInit, OnChanges, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../Service/get-profile.service';


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