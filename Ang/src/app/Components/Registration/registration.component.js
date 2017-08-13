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
var registration_service_service_1 = require('../Service/registration-service.service');
var registrationModel_1 = require('../Models/registrationModel');
var router_1 = require('@angular/router');
var status_service_1 = require('../Service/status.service');
var RegistrationComponent = (function () {
    function RegistrationComponent(registrationService, router, alertService) {
        this.registrationService = registrationService;
        this.router = router;
        this.alertService = alertService;
        this.user = new registrationModel_1.User;
    }
    RegistrationComponent.prototype.registr = function (user) {
        var _this = this;
        this.registrationService.postData(user)
            .subscribe(function (data) {
            _this.router.navigate(['login']);
            _this.alertService.success('Registration successful', true);
        }, function (error) {
            _this.alertService.error('Incorrect form field');
        });
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'registration',
            moduleId: module.id,
            templateUrl: './registration.template.html',
            providers: [registration_service_service_1.RegistrationService]
        }), 
        __metadata('design:paramtypes', [registration_service_service_1.RegistrationService, router_1.Router, status_service_1.AlertService])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=registration.component.js.map