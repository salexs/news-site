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
var news_service_1 = require('../Service/news.service');
var status_service_1 = require('../Service/status.service');
var router_1 = require('@angular/router');
var router_2 = require('@angular/router');
var AppComponent = (function () {
    function AppComponent(newsService, alertService, router, activateRoute) {
        this.newsService = newsService;
        this.alertService = alertService;
        this.router = router;
        this.activateRoute = activateRoute;
        this.newsList = [];
        this.currentUser = activateRoute.snapshot.params['username'];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsService.getData(this.currentUser).subscribe(function (data) {
            data.map(function (elem) {
                _this.newsList.push(elem);
            });
        }, function (error) {
            _this.alertService.error('You are not authorized!!!');
        });
    };
    AppComponent.prototype.delNewsClick = function (id) {
        var _this = this;
        this.newsService.delNews(id).subscribe(function (data) {
            var index = _this.newsList.findIndex(function (elem) { return elem.pk == id; });
            _this.newsList.splice(index, 1);
        }, function (error) {
            if (error.status == "403")
                _this.alertService.error('You are not owner this news!!!');
        });
    };
    AppComponent.prototype.addNewsClick = function (news) {
        var _this = this;
        this.title = '';
        this.text = '';
        this.newsService.createNews(news).subscribe(function (data) {
            _this.newsList.push(data);
        }, function (error) {
            if (error.status == "403")
                _this.alertService.error('You are not owner this news!!!');
        });
    };
    AppComponent.prototype.openDetailAuthor = function (author) {
        this.router.navigate([author]);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<div class='col-md-9 col-md-offset-1'>\n                    <label>Create news:</label>\n                    <input [(ngModel)]=\"title\" placeholder=\"Title\">\n                    <input [(ngModel)]=\"text\" placeholder=\"Text\">\n                    <input class=\"btn btn-default\" type=\"submit\" (click)=\"addNewsClick({title:title,text:text})\" value=\"Add News\" >\n                    <div class=\"row\">\n                        <div class=\"col-sm-5 col-md-3\" *ngFor=\"let news of newsList\">\n                            <div class=\"thumbnail\">\n                                <div class=\"caption\">\n                                    <i class=\"fa fa-trash-o\" aria-hidden=\"true\" (click)=\"delNewsClick(news.pk)\"></i>\n                                    <h3>{{news.title}}</h3>\n                                    <p>{{news.text}}</p>\n                                    <p (click)=\"openDetailAuthor(news.author)\"><i>Author: {{news.author}}</i></p>\n                                    <p><a href=\"#\" class=\"btn btn-default\" role=\"button\">Show More</a></p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                 "
        }), 
        __metadata('design:paramtypes', [news_service_1.NewsService, status_service_1.AlertService, router_1.Router, router_2.ActivatedRoute])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map