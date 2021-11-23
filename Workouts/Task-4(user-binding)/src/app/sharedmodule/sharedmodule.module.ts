import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedmoduleRoutingModule } from './sharedmodule-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AddtaskComponent,
    TasklistComponent,
  ],
  imports: [
    CommonModule,
    SharedmoduleRoutingModule,
    FormsModule
  ],
  exports: [
    HeaderComponent, FooterComponent, AddtaskComponent, TasklistComponent
  ]
})
export class SharedmoduleModule { }
