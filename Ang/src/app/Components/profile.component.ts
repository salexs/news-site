import { Component, DoCheck, OnInit, OnChanges, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../Service/get-profile.service';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
    selector: 'demo-modal-service-static',
    templateUrl: './modal.html'
})
export class DemoModalServiceStaticComponent {
    public modalRef: BsModalRef;
    constructor(private modalService: BsModalService) { }

    public openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }
}




@Component({
    moduleId: module.id,
    selector: 'profile',
    styleUrls: ['./profile.component.css'],
    templateUrl: './profile.component.html'

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