import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EhomeComponent } from './employee/ehome/ehome.component';
import { EUserGuard } from './eUser/e-user.guard';
import { EloginComponent } from './eUser/elogin/elogin.component';
import { LoginMainComponent } from './login-main/login-main.component';
import { MhomeComponent } from './manager/mhome/mhome.component';
import { MUserGuard } from './mUser/m-user.guard';
import { MloginComponent } from './mUser/mlogin/mlogin.component';

const routes: Routes = [
  { path: "loginMain", component: LoginMainComponent },
  { path: "mlogin", component: MloginComponent },
  { path: "elogin", component: EloginComponent },
  { path: "mHome", component: MhomeComponent },
  { path: "eHome", component: EhomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
