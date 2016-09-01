import { LoginService } from 'app/login.service.ts'

describe('LoginServices', () => {
	it('validUser', () => {
		let logged = loginTest={};

		expect(logged).toEqual(true);
	});

	it('invalidUser', () => {
		let logged: login={email: 'string', password: 'string'};

		expect(logged).toEqual(false);
	});
});