import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomepageRoutingModule} from './homepage-routing.module';
import {HomepageComponent} from './homepage.component';
import {HomeComponent} from '../home/home.component';
import {AboutComponent} from '../about/about.component';
import {ContactsComponent} from '../contacts/contacts.component';
import {VacancyComponent} from '../vacancy/vacancy.component';


@NgModule({
  declarations: [
    HomepageComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    VacancyComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule {
}
