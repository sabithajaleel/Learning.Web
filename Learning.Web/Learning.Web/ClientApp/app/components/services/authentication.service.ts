import { Injectable } from '@angular/core'
import { Http, Headers, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { AppConfig } from '../app/app.config'
import { User } from '../models/index'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private config: AppConfig) { }

    register(user: User) {
        return this.http.post(this.config.apiUrl + 'account', user).map((response: Response) => {
            let result = response.json()
            if (!result.Succeeded) {

            }
        })
    }

    login(username: string, password: string) {
        return this.http.post(this.config.apiUrl + 'token', { Username: username, Password: password })
            .map((response: Response) => {
                let result = response.json()
                if (result && result.token) {
                    localStorage.setItem('currentUser', JSON.stringify(result))
                }
            })
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}