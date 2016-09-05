"use strict";
var _this = this;
var login_service_1 = require('./login.service');
describe('LoginService', function () {
    it('testTest', function () {
        expect(1).toEqual(1);
    });
    it('testTes2t', function () {
        expect(1).toEqual(1);
    });
    it('validUser', function () {
        //let logged : LoginService.call('loginTest');
        _this.LoginService = new login_service_1.LoginService();
        expect(_this.LoginService).toEqual('loginTest');
    });
    /*
    it('invalidUser', () => {
        //let logged: login={email: 'string', password: 'string'};

        //expect(logged).toEqual(false);
        expect(1).toEqual(1);
    });*/
});
//# sourceMappingURL=login.spec.js.map