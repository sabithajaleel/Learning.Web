import { Routes, RouterModule } from '@angular/router'

import { RegisterComponent } from './components/register/index'
import { LoginComponent } from './components/login/index'
import { HomeComponent } from './components/home/index'
import { AuthGuard } from './components/guards/index'

const appRoutes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: 'login' }
]

export const routing = RouterModule.forRoot(appRoutes)