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
var follow_auth_service_1 = require('../Service/follow-auth.service');
var HeaderComponent = (function () {
    function HeaderComponent(followAuthService) {
        var _this = this;
        this.followAuthService = followAuthService;
        this.subscription = this.followAuthService.getLS().subscribe(function (name) { _this.name = name; });
    }
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    HeaderComponent.prototype.ngOnInit = function () {
        if (JSON.parse(localStorage.getItem('currentUser'))) {
            this.name = JSON.parse(localStorage.getItem('currentUser')).username;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], HeaderComponent.prototype, "name", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'header-comp',
            styles: [" \n            @import url('https://fonts.googleapis.com/css?family=Droid+Serif');\n            h1 {\n                font-family: 'Droid Serif', serif;\n            }\n            .nav > li > a {\n                color:white;\n            }\n            .nav {\n                margin-left: 1110px;\n            }\n    "],
            templateUrl: 'app/Components/header.component.html'
        }), 
        __metadata('design:paramtypes', [follow_auth_service_1.FollowAuthService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map