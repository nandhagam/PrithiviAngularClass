import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from '../authentication/login/login.component';
import { BgcolorDirective } from './directives/bgcolor.directive';
import { DueCategorizeDirective } from './directives/due-categorize.directive';

const routes: Routes = [
  { path: 'login', component: LoginComponent }
]

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BgcolorDirective,
    DueCategorizeDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HeaderComponent, FooterComponent, FontAwesomeModule, BgcolorDirective, DueCategorizeDirective
  ]
})
export class SharedmoduleModule { }
