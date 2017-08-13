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
var NewsListComponent = (function () {
    function NewsListComponent(newsService, alertService, router, activateRoute) {
        this.newsService = newsService;
        this.alertService = alertService;
        this.router = router;
        this.activateRoute = activateRoute;
        this.newsList = [];
        this.currentUser = activateRoute.snapshot.params['username'];
    }
    NewsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsService.getData(this.currentUser).subscribe(function (data) {
            data.map(function (elem) {
                _this.newsList.push(elem);
            });
        }, function (error) {
            _this.alertService.error('You are not authorized!!!');
        });
    };
    NewsListComponent.prototype.delNewsClick = function (id) {
        var _this = this;
        this.newsService.delNews(id).subscribe(function (data) {
            var index = _this.newsList.findIndex(function (elem) { return elem.pk == id; });
            _this.newsList.splice(index, 1);
        }, function (error) {
            if (error.status == "403")
                _this.alertService.error('You are not owner this news!!!');
        });
    };
    NewsListComponent.prototype.addNewsClick = function (news) {
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
    NewsListComponent.prototype.openDetailAuthor = function (author) {
        this.router.navigate([author]);
    };
    NewsListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'newslist',
            templateUrl: './news-list.template.html',
        }), 
        __metadata('design:paramtypes', [news_service_1.NewsService, status_service_1.AlertService, router_1.Router, router_2.ActivatedRoute])
    ], NewsListComponent);
    return NewsListComponent;
}());
exports.NewsListComponent = NewsListComponent;
//# sourceMappingURL=news-list.component.js.map