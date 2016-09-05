import { Injectable }   from '@angular/core';
import { addProviders, inject } from '@angular/core/testing';
import { LoginService } from './login.service';

describe('LoginService', () => {

	it('testTest', () => {
		expect(1).toEqual(1);
	});
	it('testTes2t', () => {
		expect(1).toEqual(1);
	});

	it('validUser', () => {
		//let logged : LoginService.call('loginTest');
		this.LoginService = new LoginService();

		expect(this.LoginService).toEqual('loginTest');
	});
	/*
	it('invalidUser', () => {
		//let logged: login={email: 'string', password: 'string'};

		//expect(logged).toEqual(false);
		expect(1).toEqual(1);
	});*/
});