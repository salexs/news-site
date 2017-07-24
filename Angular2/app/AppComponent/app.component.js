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
var News = (function () {
    function News(title, text) {
        this.id = Math.floor(Math.random() * Date.now());
        this.title = title;
        this.text = text;
        this.author = "Alex";
    }
    return News;
}());
exports.News = News;
var AppComponent = (function () {
    function AppComponent() {
        this.newsList = [
            { title: "Title", text: "MyText", author: "Alex", date: "23/4/2017", id: 3212 },
            { title: "Title2", text: "MyText2", author: "Alex", date: "23/4/2017", id: 34435 }
        ];
    }
    AppComponent.prototype.addNews = function (title, text) {
        if (text == null || text == undefined || text.trim() == "")
            return;
        if (title == null || title == undefined || title.trim() == "")
            return;
        this.newsList.push(new News(title, text));
    };
    AppComponent.prototype.delNews = function (news) {
        for (var i = 0; i < this.newsList.length; i++) {
            if (this.newsList[i].id == news.id) {
                console.log(news.id);
                this.newsList.splice(i, 1);
                return;
            }
        }
        ;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<label>Create news:</label>\n                 <input [(ngModel)]=\"title\" placeholder=\"Title\">\n                 <input [(ngModel)]=\"text\" placeholder=\"Text\">\n                 <input class=\"btn btn-default\" type=\"submit\" value=\"Add News\" (click)=\"addNews(title, text)\">\n                 <div class=\"row\">\n                    <div class=\"col-sm-5 col-md-3\" *ngFor=\"let news of newsList\">\n                        <div class=\"thumbnail\">\n                            <div class=\"caption\">\n                                <i class=\"fa fa-trash-o\" aria-hidden=\"true\" (click)=\"delNews(news)\"></i>\n                                <h3>{{news.title}}</h3>\n                                <p>{{news.text}}</p>\n                                <p><i>Author: {{news.author}}</i></p>\n                                <p><a href=\"#\" class=\"btn btn-default\" role=\"button\">Show More</a></p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                 "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map