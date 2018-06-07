import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { AlertService, AuthenticationService } from '../services/index'

@Component({
    templateUrl: 'register.component.html'
})

export class RegisterComponent {

    model: any = {}
    loading = false;

    constructor(private router: Router, private alertService: AlertService, private authenticationService: AuthenticationService) { }

    register() {
        this.loading = true
        this.authenticationService.register(this.model)
            .subscribe(
            data => {
                this.alertService.success('Registration Successful', true)
                this.router.navigate(['/login']);
            },
            error => {
                this.alertService.error(error._body);
                this.loading = false
            }
        )
    }
}
