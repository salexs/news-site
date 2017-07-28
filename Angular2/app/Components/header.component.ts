import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FollowAuthService } from '../Service/follow-auth.service'
@Component({
    selector: 'header-comp',
    styles: [` 
            @import url('https://fonts.googleapis.com/css?family=Droid+Serif');
            h1 {
                font-family: 'Droid Serif', serif;
            }
            .nav > li > a {
                color:white;
            }
            .nav {
                margin-left: 1110px;
            }
    `],
    template: `
                <div>
                    <ul *ngIf='!name' class="nav navbar-nav navbar-right">
                        <li role="presentation"><a routerLink="/registration">Registration</a></li>
                        <li role="presentation"><a routerLink="/login">Login</a></li>
                    </ul>
                    <ul *ngIf='name' class="nav navbar-nav navbar-right">
                        <li role="presentation"><a routerLink="/profile">{{name}}</a></li>
                        <li role="presentation"><a routerLink="/login">LogOut</a></li>
                    </ul>
                </div>
                 `
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