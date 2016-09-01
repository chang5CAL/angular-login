import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
	private headers = new Headers({'Content-Type': 'application/json'});
	private url = 'http://162.243.205.90/user/login';

	constructor(private http: Http) { }

	login(email: string, password: string): Promise<any> {
		return this.http
			.post(this.url, JSON.stringify({"email": email, "password": password}), {headers: this.headers})
			.toPromise()
			.then(response => response.json())
			.catch(this.handleError)
	}

	loginTest(): Promise<any> {
		return this.http
			.post(this.url, JSON.stringify({"email": "sreekumar.sh@gmail.com", "password":"sreesree"}), {headers: this.headers})
			.toPromise()
			.then(response => response.json())
			.catch(this.handleError)
	}

	private handleError(error: any): Promise<any> {
    console.error('An error occurred', error.message); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}