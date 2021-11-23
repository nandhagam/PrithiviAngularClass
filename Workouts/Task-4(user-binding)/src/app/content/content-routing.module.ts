import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtaskComponent } from '../sharedmodule/addtask/addtask.component';
import { TasklistComponent } from '../sharedmodule/tasklist/tasklist.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'addtask', component: AddtaskComponent },
  { path: 'tasklist', component: TasklistComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
