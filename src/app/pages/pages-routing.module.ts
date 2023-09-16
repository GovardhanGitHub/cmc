import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Index6Component } from './index6/index6.component';

import { LoginComponent } from './login/login.component';
import { PasswordForgetComponent } from './password-forget/password-forget.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'index-6',
        pathMatch: 'full'
    },
  
    {
        path: 'index-6',
        component: Index6Component
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'password_forget',
        component: PasswordForgetComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
