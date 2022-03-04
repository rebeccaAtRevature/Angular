import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AnimalListComponent } from './animal/animal-list/animal-list.component';
import { FormsModule } from '@angular/forms';
import { AnimalEditComponent } from './animal/animal-edit/animal-edit.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { ListHttpAnimalComponent } from './animal/list-http-animal/list-http-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnimalListComponent,
    AnimalEditComponent,
    LoginComponent,
    LogoutComponent,
    ListHttpAnimalComponent
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
