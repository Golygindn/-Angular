import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomepageRoutingModule} from './homepage-routing.module';
import {HomepageComponent} from './homepage.component';
import {HomeComponent} from '../home/home.component';
import {AboutComponent} from '../about/about.component';
import {VacancyComponent} from '../vacancy/vacancy.component';
import {ContactsComponent} from '../contacts/contacts.component';


@NgModule({
  declarations: [
    HomepageComponent,
    HomeComponent,
    AboutComponent,
    VacancyComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    HomeComponent,

  ]
})
export class HomepageModule {
}
