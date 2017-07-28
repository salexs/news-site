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
var Profile = (function () {
    function Profile() {
    }
    Profile = __decorate([
        core_1.Component({
            selector: 'profile',
            template: "<div class='col-md-9 col-md-offset-1'>\n                    <div class=\"jumbotron\">\n                        <h2>Aleksey</h2>\n                        <p>email: alex@dunice.ru</p>\n                        <p><a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Show more</a></p>\n                    </div>\n                </div>\n                 "
        }), 
        __metadata('design:paramtypes', [])
    ], Profile);
    return Profile;
}());
exports.Profile = Profile;
//# sourceMappingURL=profile.component.js.map