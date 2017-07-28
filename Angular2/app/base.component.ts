import { Component, OnInit, DoCheck, OnChanges } from '@angular/core';

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
                        <header-comp></header-comp>
                    </header>
                    <alert></alert>
                    <router-outlet></router-outlet>
                </div>
                 `
})
export class BaseComponent {

    
}