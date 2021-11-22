import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContentComponent } from './content.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule

  ],
  /*   exports: [ContentRoutingModule] */

})
export class ContentModule { }
