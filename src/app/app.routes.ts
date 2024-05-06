import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';
import { GuestGuardService } from './services/guest-guard.service';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [GuestGuardService]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [GuestGuardService]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    },
];
