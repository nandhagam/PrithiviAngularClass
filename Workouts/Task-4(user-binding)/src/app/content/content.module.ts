import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContentComponent } from './content.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';
import { AddtaskComponent } from './addtask/addtask.component';
import { FormsModule } from '@angular/forms';
import { TasklistComponent } from './tasklist/tasklist.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    ContentComponent,
    AddtaskComponent,
    TasklistComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    SharedmoduleModule,
    FormsModule

  ],
  /*   exports: [ContentRoutingModule] */

})
export class ContentModule { }
