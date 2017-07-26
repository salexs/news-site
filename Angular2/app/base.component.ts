import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
    selector: 'main',
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
                    <header>
                        <h1 routerLink="">Tagan News</h1 >
                        <ul *ngIf='!name' class="nav navbar-nav navbar-right">
                            <li role="presentation"><a routerLink="/registration">Registration</a></li>
                            <li role="presentation"><a routerLink="/login">Login</a></li>
                        </ul>
                        <ul *ngIf='name' class="nav navbar-nav navbar-right">
                            <li role="presentation"><a routerLink="/registration">{{name}}</a></li>
                            <li role="presentation"><a routerLink="/login">LogOut</a></li>
                        </ul>
                    </header>
                    <alert></alert>
                    <router-outlet></router-outlet>
                </div>
                 `
})
export class BaseComponent implements DoCheck {
    name: string;
    ngDoCheck() {
        if (JSON.parse(localStorage.getItem('currentUser'))) {
            this.name = JSON.parse(localStorage.getItem('currentUser')).username
        }
    }
    
}