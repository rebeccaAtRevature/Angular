import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EUserGuard } from './eUser/e-user.guard';
import { EloginComponent } from './eUser/elogin/elogin.component';
import { LoginMainComponent } from './login-main/login-main.component';
import { MUserGuard } from './mUser/m-user.guard';
import { MloginComponent } from './mUser/mlogin/mlogin.component';

const routes: Routes = [
  { path: "loginMain", component: LoginMainComponent},
  { path: "mlogin", component: MloginComponent, canActivate: [MUserGuard] },
  { path: "elogin", component: EloginComponent, canActivate: [EUserGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
