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
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/toPromise');
var auth_service_service_1 = require('../Authorization/auth-service.service');
var NewsService = (function () {
    function NewsService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    NewsService.prototype.getData = function () {
        console.log(JSON.parse(localStorage.getItem('currentUser')));
        var headers = new http_1.Headers({ 'Authorization': 'JWT  ' + JSON.parse(localStorage.getItem('currentUser')).token });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get('http://localhost:8000/api/news/', options)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error); });
    };
    NewsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_service_1.AuthService])
    ], NewsService);
    return NewsService;
}());
exports.NewsService = NewsService;
//# sourceMappingURL=news.service.js.map