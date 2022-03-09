import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPrComponent } from './employee/add-pr/add-pr.component';
import { EhomeComponent } from './employee/ehome/ehome.component';
import { UpdateEmpComponent } from './employee/update-emp/update-emp.component';
import { ViewEmpPrComponent } from './employee/view-emp-pr/view-emp-pr.component';
import { ViewEmpRrComponent } from './employee/view-emp-rr/view-emp-rr.component';
import { ViewEmpComponent } from './employee/view-emp/view-emp.component';
import { EUserGuard } from './eUser/e-user.guard';
import { EloginComponent } from './eUser/elogin/elogin.component';
import { ElogoutComponent } from './eUser/elogout/elogout.component';
import { LoginMainComponent } from './login-main/login-main.component';
import { AppDenyComponent } from './manager/app-deny/app-deny.component';
import { MhomeComponent } from './manager/mhome/mhome.component';
import { ViewAllEmpComponent } from './manager/view-all-emp/view-all-emp.component';
import { ViewAllPRComponent } from './manager/view-all-pr/view-all-pr.component';
import { ViewAllRRComponent } from './manager/view-all-rr/view-all-rr.component';
import { ViewEmpRComponent } from './manager/view-emp-r/view-emp-r.component';
import { ViewPrComponent } from './manager/view-pr/view-pr.component';
import { MheaderComponent } from './mheader/mheader.component';
import { MUserGuard } from './mUser/m-user.guard';
import { MloginComponent } from './mUser/mlogin/mlogin.component';
import { MlogoutComponent } from './mUser/mlogout/mlogout.component';

const routes: Routes = [
  { path: "loginMain", component: LoginMainComponent },
  { path: "mlogin", component: MloginComponent },
  { path: "loginMain/mlogin", component: MloginComponent },
  { path: "elogin", component: EloginComponent },
  { path: "loginMain/elogin", component: EloginComponent },
  { path: "mHeader", component: MheaderComponent },
  { path: "mHome", component: MhomeComponent, canActivate: [MUserGuard] },
  { path: "mHome/app-deny", component: AppDenyComponent, canActivate: [MUserGuard] },
  { path: "mHome/view-pr", component: ViewPrComponent, canActivate: [MUserGuard] },
  { path: "mHome/view-emp-r", component: ViewEmpRComponent, canActivate: [MUserGuard] },
  { path: "mHome/view-all-rr", component: ViewAllRRComponent, canActivate: [MUserGuard] },
  { path: "mHome/view-all-pr", component: ViewAllPRComponent, canActivate: [MUserGuard] },
  { path: "mHome/view-all-emp", component: ViewAllEmpComponent, canActivate: [MUserGuard] },
  { path: "mHome/mlogout", component: ElogoutComponent },
  { path: "eHome", component: EhomeComponent, canActivate: [EUserGuard] },
  { path: "eHome/add-pr", component: AddPrComponent, canActivate: [EUserGuard] },
  { path: "eHome/update-emp", component: UpdateEmpComponent, canActivate: [EUserGuard] },
  { path: "eHome/view-emp", component: ViewEmpComponent, canActivate: [EUserGuard] },
  { path: "eHome/view-emp-rr", component: ViewEmpRrComponent, canActivate: [EUserGuard] },
  { path: "eHome/view-emp-pr", component: ViewEmpPrComponent, canActivate: [EUserGuard] },
  { path: "eHome/elogout", component: MlogoutComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
