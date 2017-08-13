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
var auth_service_service_1 = require('../Service/auth-service.service');
var router_1 = require('@angular/router');
var authorizationModel_1 = require('../Models/authorizationModel');
var status_service_1 = require('../Service/status.service');
var angular2_social_login_1 = require("angular2-social-login");
var AuthorizationComponent = (function () {
    function AuthorizationComponent(authService, router, alertService, _auth) {
        this.authService = authService;
        this.router = router;
        this.alertService = alertService;
        this._auth = _auth;
        this.user = new authorizationModel_1.User;
    }
    AuthorizationComponent.prototype.ngOnInit = function () {
        this.authService.logout();
    };
    AuthorizationComponent.prototype.check = function (user) {
        var _this = this;
        this.authService.postData(user)
            .subscribe(function (data) {
            _this.router.navigate(['']);
        }, function (error) {
            console.log(error);
            _this.alertService.error(error);
        });
    };
    AuthorizationComponent.prototype.signIn = function (provider) {
        this.sub = this._auth.login(provider).subscribe(function (data) {
            console.log(data);
            //user data 
            //name, image, uid, provider, uid, email, token (accessToken for Facebook & google, no token for linkedIn), idToken(only for google) 
        });
    };
    AuthorizationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'authorization',
            styleUrls: ['./authorization.component.css'],
            templateUrl: './authorization.template.html',
            providers: [angular2_social_login_1.AuthService]
        }), 
        __metadata('design:paramtypes', [auth_service_service_1.AuthServices, router_1.Router, status_service_1.AlertService, angular2_social_login_1.AuthService])
    ], AuthorizationComponent);
    return AuthorizationComponent;
}());
exports.AuthorizationComponent = AuthorizationComponent;
//# sourceMappingURL=authorization.component.js.map