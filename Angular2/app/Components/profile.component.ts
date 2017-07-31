import { Component, DoCheck, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../Service/get-profile.service';

@Component({
    selector: 'profile',
    styleUrls: ['app/Components/profile.component.css'],
    template: `
                <div class="container" style="margin-top: 30px;">
                    <div class="profile-head">
                        <div class="col-md- col-sm-4 col-xs-12">
                            <img src="" class="img-responsive" />
                            <h6>{{user.first_name}} {{user.last_name}}</h6>
                        </div>
                        <div class="col-md-5 col-sm-5 col-xs-12">
                            <h5>{{user.first_name}} {{user.last_name}}</h5>
                            <p>Web Designer / Develpor </p>
                            <ul>
                                <li><span class="glyphicon glyphicon-briefcase"></span> 5 years</li>
                                <li><span class="glyphicon glyphicon-map-marker"></span> Tam gde vsegda meropriyatiya</li>
                                <li><span class="glyphicon glyphicon-envelope"></span><a href="#" title="mail">{{user.email}}</a></li>
                            </ul>
                        </div>
                    </div>
                    <my-app></my-app>
                </div>
                 `
})
export class Profile implements OnInit {
    currentUser: string;
    user : any = {};
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