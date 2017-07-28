import { Component, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FollowAuthService } from '../Authorization/follow-auth.service'
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
                        <li role="presentation"><a routerLink="">{{name}}</a></li>
                        <li role="presentation"><a routerLink="/login">LogOut</a></li>
                    </ul>
                </div>
                 `
})
export class HeaderComponent {
    
    @Input() name: string;
    subscription: Subscription;

    constructor(private followAuthService: FollowAuthService) {
        this.subscription = this.followAuthService.getLS().subscribe((name) => { this.name = name; });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}