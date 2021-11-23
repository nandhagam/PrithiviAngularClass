import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContentComponent } from './content.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';


@NgModule({
  declarations: [
    WelcomeComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    SharedmoduleModule

  ],
  /*   exports: [ContentRoutingModule] */

})
export class ContentModule { }
