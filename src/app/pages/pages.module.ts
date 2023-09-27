import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { NgParticlesModule } from 'ng-particles';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { PagesRoutingModule } from './pages-routing.module'

import { SharedModule } from '../shared/shared.module';

import { Index6Component } from './index6/index6.component';

import { LoginComponent } from './login/login.component';
import { PasswordForgetComponent } from './password-forget/password-forget.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from './register/register.component';
import { RegistrationStatusComponent } from './registration-status/registration-status.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistedListComponent } from './registed-list/registed-list.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { CheckStatusComponent } from './check-status/check-status.component';


@NgModule({
  declarations: [Index6Component, LoginComponent, PasswordForgetComponent, SignupComponent,RegisterComponent, RegistrationStatusComponent,RegistedListComponent, CandidateDetailsComponent, CheckStatusComponent],
  
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    ScrollToModule.forRoot(),
    NgxTypedJsModule,
    NgParticlesModule,
    CarouselModule,
    ReactiveFormsModule,HttpClientModule,FormsModule
  ]

})
export class PagesModule { }
