import { Component, OnInit, DoCheck, OnChanges } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'maincraft',
    styles: [` 
            @import url('https://fonts.googleapis.com/css?family=Droid+Serif');

            h1 {
                font-family: 'Droid Serif', serif;
                width:400px;
                color:#7fedf2;
                margin:0;
                padding:0;
            }
            header {
                border:1px solid black;
                overflow:hidden;
                background: #56628a;
                padding: 15px 10px 15px 10px;
            }
            header .logo {
                float:left;
            }
            .сaption-site {
                float:left;
                width:215px;
            }
    `],
    template: `
                <div>
                    <header>

                        <div class='сaption-site'><a href=""><h1 routerLink="">Tagan News</h1></a></div>
                        <div class="logo">
                            <img src="http://cdn.onlinewebfonts.com/svg/img_22236.svg" width="45px" height="45px"/>
                        </div>
                        <header-comp></header-comp>
                    </header>
                    <alert></alert>
                    <router-outlet></router-outlet>
                </div>
            `
})
export class BaseComponent { }