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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var Rx_1 = require('rxjs/Rx');
var follow_auth_service_1 = require('./follow-auth.service');
var AuthServices = (function () {
    function AuthServices(http, followAuthService) {
        this.http = http;
        this.followAuthService = followAuthService;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthServices.prototype.postData = function (obj) {
        var _this = this;
        var body = JSON.stringify(obj);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        return this.http.post("http://localhost:8000/api/users/gettoken/", body, { headers: headers })
            .map(function (resp) {
            var token = resp.json();
            localStorage.setItem('currentUser', JSON.stringify({ token: token.token, username: obj.username }));
            _this.followAuthService.setToken(obj.username);
            return true;
        })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    AuthServices.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        this.followAuthService.clearLS();
    };
    AuthServices = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, follow_auth_service_1.FollowAuthService])
    ], AuthServices);
    return AuthServices;
}());
exports.AuthServices = AuthServices;
//# sourceMappingURL=auth-service.service.js.map