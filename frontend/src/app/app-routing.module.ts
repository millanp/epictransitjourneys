import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { JourneyListComponent } from './journey-list/journey-list.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full', data: {navName: "Home"}},
  {path: 'journeys', component: JourneyListComponent, data: {navName: "Journey List"}},
  {path: 'login', component: LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
