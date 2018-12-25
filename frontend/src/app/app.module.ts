import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavComponent } from './nav/nav.component';
import { JourneyListComponent } from './journey-list/journey-list.component';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';

import { CookieService } from "ngx-cookie-service";
import { NewJourneyComponent } from './new-journey/new-journey.component';
import { httpInterceptorProviders } from './http-interceptors';
import { JourneyDetailComponent } from './journey-detail/journey-detail.component';
import { MdToHtmlPipe } from './md-to-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    JourneyListComponent,
    LoginComponent,
    MyAccountComponent,
    NewJourneyComponent,
    JourneyDetailComponent,
    MdToHtmlPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CookieService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
