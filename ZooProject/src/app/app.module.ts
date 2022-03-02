import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AnimalListComponent } from './animal/animal-list/animal-list.component';
import { FormsModule } from '@angular/forms';
import { AnimalEditComponent } from './animal/animal-edit/animal-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnimalListComponent,
    AnimalEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
