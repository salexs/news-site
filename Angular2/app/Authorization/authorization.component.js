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
var AuthorizationComponent = (function () {
    function AuthorizationComponent() {
        this.name = '';
    }
    AuthorizationComponent = __decorate([
        core_1.Component({
            selector: 'authorization',
            styleUrls: ['app/Authorization/authorization.component.css'],
            template: "\n        <div class=\"row auth\">\n            <div class=\"col-md-6 col-md-offset-3\">\n                <div class=\"form-group\">\n                    <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Email</label>\n                    <div class=\"col-sm-10\">\n                    <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">\u041F\u0430\u0440\u043E\u043B\u044C</label>\n                    <div class=\"col-sm-10\">\n                    <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"col-sm-offset-2 col-sm-10\">\n                    <button type=\"submit\" class=\"btn btn-default\">\u0412\u043E\u0439\u0442\u0438</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n     "
        }), 
        __metadata('design:paramtypes', [])
    ], AuthorizationComponent);
    return AuthorizationComponent;
}());
exports.AuthorizationComponent = AuthorizationComponent;
//# sourceMappingURL=authorization.component.js.map