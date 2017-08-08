import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FollowAuthService } from '../Service/follow-auth.service'
@Component({
    moduleId: module.id,
    selector: 'header-comp',
    styleUrls: ['./header.component.css'],
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {

    @Input() name: string;
    subscription: Subscription;

    constructor(private followAuthService: FollowAuthService) {
        this.subscription = this.followAuthService.getLS().subscribe((name) => { this.name = name; });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngOnInit() {
        if (JSON.parse(localStorage.getItem('currentUser'))) {
            this.name = JSON.parse(localStorage.getItem('currentUser')).username
        }
    }
}