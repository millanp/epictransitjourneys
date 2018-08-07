import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NavRoutes } from './nav-routes';
import { JourneyListComponent } from './journey-list/journey-list.component';

export const routes: NavRoutes = [
  {path: '', component: HomeComponent, pathMatch: 'full', data: {navName: "Home"}},
  {path: 'journeys', component: JourneyListComponent, data: {navName: "Journey List"}}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
