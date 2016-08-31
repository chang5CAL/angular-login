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
var login_service_1 = require('./login.service');
var AppComponent = (function () {
    function AppComponent(loginService) {
        this.loginService = loginService;
        this.email = "";
        this.password = "";
    }
    AppComponent.prototype.login = function () {
        console.log(this.email, this.password);
        this.loginService.loginTest()
            .then(function (res) {
            if (res.result == "success") {
            }
            else {
                alert("Invalid Email/Password. Please try again.");
            }
        })
            .catch(function (error) { return alert("Something went wrong! Please try again later."); });
        //this.loginService.login(this.username, this.password);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AppComponent.prototype, "email", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css'],
            providers: [login_service_1.LoginService],
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map