import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Index6Component } from './index6/index6.component';

import { LoginComponent } from './login/login.component';
import { PasswordForgetComponent } from './password-forget/password-forget.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from './register/register.component';
import { RegistrationStatusComponent } from './registration-status/registration-status.component';
import { RegistedListComponent } from './registed-list/registed-list.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { CheckStatusComponent } from './check-status/check-status.component';

const routes: Routes = [
  
    {
        path: 'index',
        component: Index6Component
    },
    {
        path: 'registrationStatus',
        component: RegistrationStatusComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'check-status',
        component: CheckStatusComponent
    },
    {
        path: 'admin',
        component: RegistedListComponent
    },
    { path: 'detail', component: CandidateDetailsComponent },

    {
        path: 'password_forget',
        component: PasswordForgetComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'register/:id',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
