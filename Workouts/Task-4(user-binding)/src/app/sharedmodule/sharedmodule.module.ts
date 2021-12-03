import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from '../authentication/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }
]

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HeaderComponent, FooterComponent, FontAwesomeModule
  ]
})
export class SharedmoduleModule { }
