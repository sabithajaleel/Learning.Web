import { Component, OnInit } from '@angular/core'

import { User } from '../models/index'
import { UserService } from '../services/index'

@Component({
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentuser: User
    users: User[] = []

    constructor(private userService: UserService) {
        var storedUser = localStorage.getItem('currentUser');
        if (storedUser != null) {
            this.currentuser = JSON.parse(storedUser);
        }
    }

    ngOnInit() {
        this.getAllUsers();
    }

    deactivateUser(id: string) {
        this.userService.deactivateUser(id).subscribe(() => { this.getAllUsers() })
    }

    activateUser(user: User) {
        this.userService.activateUser(user).subscribe(() => { this.getAllUsers() })
    }

    private getAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users })
    }
}
