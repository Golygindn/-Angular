import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', loadChildren: () => import('./components/homepage/homepage.module').then(m => m.HomepageModule)},
  {path: '', loadChildren: () => import('./components/aboutpage/aboutpage.module').then(m => m.AboutpageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
