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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var profile_component_1 = require('./Components/profile.component');
var app_component_1 = require('./Components/app.component');
var registration_component_1 = require('./Components/registration.component');
var authorization_component_1 = require('./Components/authorization.component');
var base_component_1 = require('./Components/base.component');
var status_component_1 = require('./Components/status.component');
var header_component_1 = require('./Components/header.component');
var status_service_1 = require('./Service/status.service');
var news_service_1 = require('./Service/news.service');
var auth_service_service_1 = require('./Service/auth-service.service');
var auth_guard_1 = require('./Service/auth.guard');
var follow_auth_service_1 = require('./Service/follow-auth.service');
var appRoutes = [
    { path: '', component: app_component_1.AppComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'login', component: authorization_component_1.AuthorizationComponent },
    { path: 'registration', component: registration_component_1.RegistrationComponent },
    { path: 'profile', component: profile_component_1.Profile },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
            declarations: [app_component_1.AppComponent, base_component_1.BaseComponent, registration_component_1.RegistrationComponent, authorization_component_1.AuthorizationComponent, status_component_1.AlertComponent, header_component_1.HeaderComponent, profile_component_1.Profile],
            bootstrap: [base_component_1.BaseComponent],
            providers: [status_component_1.AlertComponent, status_service_1.AlertService, news_service_1.NewsService, auth_service_service_1.AuthService, auth_guard_1.AuthGuard, follow_auth_service_1.FollowAuthService],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map