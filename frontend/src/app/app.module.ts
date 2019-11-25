import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {VacancyComponent} from './components/vacancy/vacancy.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import { BtnComponent } from './components/btn/btn.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WrapperComponent,
    HomeComponent,
    AboutComponent,
    VacancyComponent,
    ContactsComponent,
    BtnComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
