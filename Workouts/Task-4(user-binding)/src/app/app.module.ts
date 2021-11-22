import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
/* import { AuthenticationModule } from './authentication/authentication.module';
import { ContentModule } from './content/content.module'; */
import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    /*   AuthenticationModule,
      ContentModule */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
