"use strict";
describe('LoginServices', function () {
    it('validUser', function () {
        var logged = loginTest = {};
        expect(logged).toEqual(true);
    });
    it('invalidUser', function () {
        var logged = { email: 'string', password: 'string' };
        expect(logged).toEqual(false);
    });
});
//# sourceMappingURL=login-test.js.map