import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { MyAccountComponent } from './components/my-account/my-account.component';

import { CookieService } from "ngx-cookie-service";
import { NewJourneyComponent } from './components/new-journey/new-journey.component';
import { httpInterceptorProviders } from './http-interceptors';
import { JourneyDetailComponent } from './components/journey-detail/journey-detail.component';
import { MdToHtmlPipe } from './md-to-html.pipe';
import { JourneyEditorComponent } from './components/journey-editor/journey-editor.component';
import { JourneyEditorPageComponent } from './components/journey-editor-page/journey-editor-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    LoginComponent,
    MyAccountComponent,
    NewJourneyComponent,
    JourneyDetailComponent,
    MdToHtmlPipe,
    JourneyEditorComponent,
    JourneyEditorPageComponent,
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
