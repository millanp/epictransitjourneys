import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { JourneyListComponent } from './journey-list/journey-list.component';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { AuthGuard } from './auth-guard.service';

export const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full', data: {navName: "Home"}},
  {path: 'journeys', component: JourneyListComponent, data: {navName: "Journey List"}},
  {path: 'login', component: LoginComponent},
  {path: 'my-account', component: MyAccountComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
