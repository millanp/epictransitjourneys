import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { JourneyListComponent } from './components/journey-list/journey-list.component';
import { LoginComponent } from './components/login/login.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { AuthGuard } from './services/auth-guard.service';
import { NewJourneyComponent } from './components/new-journey/new-journey.component';
import { JourneyDetailComponent } from './components/journey-detail/journey-detail.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full', data: {navName: "Home"}},
  {path: 'journeys', component: JourneyListComponent, data: {navName: "Journey List"}},
  {path: 'journeys/:id', component: JourneyDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'my-account', component: MyAccountComponent, canActivate: [AuthGuard] },
  {path: 'new-journey', component: NewJourneyComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
