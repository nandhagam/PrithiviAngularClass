import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule
  ],
  /* exports: [AuthenticationRoutingModule] */
})
export class AuthenticationModule { }
