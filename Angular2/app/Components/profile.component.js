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
var router_1 = require('@angular/router');
var get_profile_service_1 = require('../Service/get-profile.service');
var Profile = (function () {
    function Profile(activateRoute, profileService) {
        this.activateRoute = activateRoute;
        this.profileService = profileService;
        this.user = {};
        this.currentUser = activateRoute.snapshot.params['username'];
    }
    Profile.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.GetProfile(this.currentUser).subscribe(function (data) {
            _this.user = data;
            console.log(_this.user.first_name);
        }, function (error) { });
    };
    Profile = __decorate([
        core_1.Component({
            selector: 'profile',
            styleUrls: ['app/Components/profile.component.css'],
            templateUrl: 'app/Components/profile.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, get_profile_service_1.ProfileService])
    ], Profile);
    return Profile;
}());
exports.Profile = Profile;
//# sourceMappingURL=profile.component.js.map