import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalEditComponent } from './animal/animal-edit/animal-edit.component';
import { AnimalListComponent } from './animal/animal-list/animal-list.component';

const routes: Routes = [
  // Specify the rout path for each of your component in app-routing.module.ts file
  { path: "animal-read", component: AnimalListComponent },
  { path: "animal-edit/:animalId", component: AnimalEditComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
