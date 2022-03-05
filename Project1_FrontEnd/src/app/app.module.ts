import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EloginComponent } from './eUser/elogin/elogin.component';
import { ElogoutComponent } from './eUser/elogout/elogout.component';

import { MlogoutComponent } from './mUser/mlogout/mlogout.component';
import { MloginComponent } from './mUser/mlogin/mlogin.component';
import { LoginMainComponent } from './login-main/login-main.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    EloginComponent,
    ElogoutComponent,
    MlogoutComponent,
    MloginComponent,
    LoginMainComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
