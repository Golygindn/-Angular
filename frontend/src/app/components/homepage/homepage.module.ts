import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomepageRoutingModule} from './homepage-routing.module';
import {HomepageComponent} from './homepage.component';
import {HomeModule} from '../home/home.module';
import {ContactsModule} from '../contacts/contacts.module';
import {AboutModule} from '../about/about.module';
import {VacancyModule} from '../vacancy/vacancy.module';
import {AppModule} from '../../app.module';


@NgModule({
  declarations: [
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    HomeModule,
    ContactsModule,
    AboutModule,
    VacancyModule,
    AppModule
  ]
})
export class HomepageModule {
}
