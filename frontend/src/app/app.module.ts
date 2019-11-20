import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { VacancyComponent } from './components/vacancy/vacancy.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutpageComponent } from './components/aboutpage/aboutpage.component';
import {HomepageModule} from './components/homepage/homepage.module';
import {AboutpageModule} from './components/aboutpage/aboutpage.module';
import {HeaderModule} from './components/header/header.module';
import {FooterModule} from './components/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    VacancyComponent,
    ContactsComponent,
    FooterComponent,
    AboutpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutpageModule,
    HeaderModule,
    FooterModule
  ],
  providers: [],
  exports: [
    ContactsComponent,
    VacancyComponent,
    AboutComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
