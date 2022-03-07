import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EhomeComponent } from './employee/ehome/ehome.component';
import { EUserGuard } from './eUser/e-user.guard';
import { EloginComponent } from './eUser/elogin/elogin.component';
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

const routes: Routes = [
  { path: "loginMain", component: LoginMainComponent },
  { path: "loginMain/mlogin", component: MloginComponent },
  { path: "elogin", component: EloginComponent },
  { path: "mHeader", component: MheaderComponent },
  { path: "mHome", component: MhomeComponent },
  { path: "app-deny", component: AppDenyComponent },
  { path: "view-pr", component: ViewPrComponent },
  { path: "view-emp-r", component: ViewEmpRComponent },
  { path: "view-all-rr", component: ViewAllRRComponent },
  { path: "view-all-pr", component: ViewAllPRComponent },
  { path: "view-all-emp", component: ViewAllEmpComponent },
  { path: "eHome", component: EhomeComponent, canActivate: [EUserGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
