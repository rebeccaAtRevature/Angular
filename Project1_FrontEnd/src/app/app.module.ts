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
import { ViewAllPRComponent } from './manager/view-all-pr/view-all-pr.component';
import { ViewAllRRComponent } from './manager/view-all-rr/view-all-rr.component';
import { ViewEmpRComponent } from './manager/view-emp-r/view-emp-r.component';
import { ViewAllEmpComponent } from './manager/view-all-emp/view-all-emp.component';
import { AppDenyComponent } from './manager/app-deny/app-deny.component';
import { MhomeComponent } from './manager/mhome/mhome.component';
import { EhomeComponent } from './employee/ehome/ehome.component';
import { ViewPrComponent } from './manager/view-pr/view-pr.component';
import { MheaderComponent } from './mheader/mheader.component';
import { AddPrComponent } from './employee/add-pr/add-pr.component';
import { ViewEmpPrComponent } from './employee/view-emp-pr/view-emp-pr.component';
import { ViewEmpRrComponent } from './employee/view-emp-rr/view-emp-rr.component';
import { ViewEmpComponent } from './employee/view-emp/view-emp.component';
import { UpdateEmpComponent } from './employee/update-emp/update-emp.component';
import { ApproveDenyPipe } from './manager/app-deny/approveDenyPipe';
import { PendingNotPendingPipe } from './manager/view-emp-r/pendingNotPendingPipe';

@NgModule({
  declarations: [
    AppComponent,
    EloginComponent,
    ElogoutComponent,
    MlogoutComponent,
    MloginComponent,
    LoginMainComponent,
    ViewAllPRComponent,
    ViewAllRRComponent,
    ViewEmpRComponent,
    ViewAllEmpComponent,
    AppDenyComponent,
    MhomeComponent,
    EhomeComponent,
    ViewPrComponent,
    MheaderComponent,
    AddPrComponent,
    ViewEmpPrComponent,
    ViewEmpRrComponent,
    ViewEmpComponent,
    UpdateEmpComponent,
    ApproveDenyPipe,
    PendingNotPendingPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  // If I want to use a custom pipe created here in other modules add:
  // exports: [ApproveDenyPipe]
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
