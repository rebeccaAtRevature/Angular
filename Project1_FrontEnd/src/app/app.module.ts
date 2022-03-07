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
import { ViewAllPRComponent } from './manager/view-all-pr/view-all-pr.component';
import { ViewAllRRComponent } from './manager/view-all-rr/view-all-rr.component';
import { ViewEmpRComponent } from './manager/view-emp-r/view-emp-r.component';
import { ViewAllEmpComponent } from './manager/view-all-emp/view-all-emp.component';
import { AppDenyComponent } from './manager/app-deny/app-deny.component';
import { MhomeComponent } from './manager/mhome/mhome.component';
import { EhomeComponent } from './employee/ehome/ehome.component';

@NgModule({
  declarations: [
    AppComponent,
    EloginComponent,
    ElogoutComponent,
    MlogoutComponent,
    MloginComponent,
    LoginMainComponent,
    HeaderComponent,
    ViewAllPRComponent,
    ViewAllRRComponent,
    ViewEmpRComponent,
    ViewAllEmpComponent,
    AppDenyComponent,
    MhomeComponent,
    EhomeComponent
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
