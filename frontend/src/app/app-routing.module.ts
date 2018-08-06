import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NavRoutes } from './nav-routes';

export const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'}
]
// TODO: Figure out this automatic nav creation
// const routes: Routes = navRoutes.map(val => 
//   {path: val.path, component: val}
// );

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
