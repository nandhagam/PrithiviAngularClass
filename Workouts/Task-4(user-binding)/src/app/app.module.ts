import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';
import { SharedmoduleModule } from './sharedmodule/sharedmodule.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedmoduleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
