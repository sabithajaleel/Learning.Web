import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http'

import { AppConfig } from '../app/app.config'
import { User } from '../models/index'

@Injectable()
export class UserService {
    constructor(private http: Http, private config: AppConfig) { }

    getAll() {
        return this.http.get(this.config.apiUrl + 'users', this.jwt()).map((response: Response) => response.json())
    }

    getById(id: string) {
        return this.http.get(this.config.apiUrl + 'users/' + id, this.jwt()).map((response: Response) => response.json())
    }

    deactivateUser(id: string) {
        return this.http.put(this.config.apiUrl + 'users/' + id, {}, this.jwt())
    }

    activateUser(user: User) {
        var model = {
            UserId: user.email,
            Deactivate: !user.deactivated,
            Activate: true
        }
        return this.http.post(this.config.apiUrl + 'users', model, this.jwt())
    }

    private jwt() {
        var storedUser = localStorage.getItem('currentUser')
        if (storedUser != null) {
            let currentUser = JSON.parse(storedUser)

            if (currentUser && currentUser.token) {
                let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token })
                return new RequestOptions({ headers: headers })
            }
        }
    }
}
