import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './components/app/app.component'
import { routing } from './app.routing'
import { AppConfig } from './components/app/app.config'

import { AuthGuard } from './components/guards/index'
import { AlertService, AuthenticationService, UserService } from './components/services/index'
import { RegisterComponent } from './components/register/index'
import { LoginComponent } from './components/login/index'
import { HomeComponent } from './components/home/index'

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        LoginComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        FormsModule,
        routing
    ],
    providers: [
        AppConfig,
        AlertService,
        AuthGuard,
        AuthenticationService,
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModuleShared {
}
