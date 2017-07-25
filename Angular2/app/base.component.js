"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var BaseComponent = (function () {
    function BaseComponent() {
    }
    BaseComponent = __decorate([
        core_1.Component({
            selector: 'main',
            styles: [" \n            @import url('https://fonts.googleapis.com/css?family=Droid+Serif');\n            h1 {\n                font-family: 'Droid Serif', serif;\n            }\n            .nav > li > a {\n                color:white;\n            }\n            .nav {\n                margin-left: 1110px;\n            }\n    "],
            template: "\n                <div>\n                    <header>\n                        <h1 routerLink=\"\">Tagan News</h1 >\n                        <ul class=\"nav navbar-nav navbar-right\">\n                            <li role=\"presentation\"><a routerLink=\"/registration\">Registration</a></li>\n                            <li role=\"presentation\"><a routerLink=\"/login\">Login</a></li>\n                        </ul>\n                    </header>\n                    <alert></alert>\n                    <router-outlet></router-outlet>\n                </div>\n                 "
        }), 
        __metadata('design:paramtypes', [])
    ], BaseComponent);
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=base.component.js.map