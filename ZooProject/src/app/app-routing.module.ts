import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalEditComponent } from './animal/animal-edit/animal-edit.component';
import { AnimalListComponent } from './animal/animal-list/animal-list.component';
import { AuthGuard } from './user/auth.guard';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  // Specify the rout path for each of your component in app-routing.module.ts file
  { path: "animal-read", component: AnimalListComponent, canActivate: [AuthGuard] },
  { path: "animal-edit/:animalId", component: AnimalEditComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
