import { Component, Input } from '@angular/core';

import { LoginService } from './login.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [LoginService],
})
export class AppComponent { 
	@Input()
	email: string = "";
	password: string = "";

	constructor(
		private loginService: LoginService
	) {}

	login(): void {
		console.log(this.email, this.password);
		this.loginService.loginTest()
			.then(res => {
				if (res.result == "success") {
					// setup login status or redirect
				} else {
					alert("Invalid Email/Password. Please try again.");
				}
			})
			.catch(error => alert("Something went wrong! Please try again later."));
		//this.loginService.login(this.username, this.password);
	}
}
