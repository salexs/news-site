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
var angular2_social_login_1 = require("angular2-social-login");
var profile_component_1 = require('./Components/profile.component');
var news_list_component_1 = require('./Components/news-list.component');
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
var get_profile_service_1 = require('./Service/get-profile.service');
var providers = {
    "google": {
        "clientId": "480176923772-v03uiebg10f4rl9gh4k208vv6ij9ac8t.apps.googleusercontent.com"
    },
    "facebook": {
        "clientId": "FACEBOOK_CLIENT_ID",
        "apiVersion": "<version>" //like v2.4 
    }
};
var appRoutes = [
    { path: '', component: news_list_component_1.NewsListComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'login', component: authorization_component_1.AuthorizationComponent },
    { path: 'registration', component: registration_component_1.RegistrationComponent },
    { path: ':username', component: profile_component_1.Profile },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes), angular2_social_login_1.Angular2SocialLoginModule],
            declarations: [news_list_component_1.NewsListComponent, base_component_1.BaseComponent, registration_component_1.RegistrationComponent, authorization_component_1.AuthorizationComponent, status_component_1.AlertComponent, header_component_1.HeaderComponent, profile_component_1.Profile],
            bootstrap: [base_component_1.BaseComponent],
            providers: [status_component_1.AlertComponent, status_service_1.AlertService, news_service_1.NewsService, auth_service_service_1.AuthServices, auth_guard_1.AuthGuard, follow_auth_service_1.FollowAuthService, get_profile_service_1.ProfileService],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
angular2_social_login_1.Angular2SocialLoginModule.loadProvidersScripts(providers);
//# sourceMappingURL=app.module.js.map