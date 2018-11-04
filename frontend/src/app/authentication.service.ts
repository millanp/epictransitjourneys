import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import * as moment from "moment";
import { AuthResponse } from "./oauth-response";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";


@Injectable({
  providedIn: "root"
})
export class AuthenticationService {

  private LOGIN_URL: string = "/rest-auth/login/";
  private LOGOUT_URL: string = "/rest-auth/logout/";

  private CLIENT_ID: string = "pvgEWnLsB1GGP0qAvIPN2OrkamQUKj5h16UH8iXp"; // Not secret

  private accessToken: string;
  private refreshToken: string;
  private expiresAt: number;

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) { }

  // TODO: plug Angular into django authentication system

  login(username: string, password: string): Observable<AuthResponse> {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     "Content-Type": "application/x-www-form-urlencoded",
    //     "Authorization": "Basic " + btoa(this.CLIENT_ID + ":")
    //   })
    // };
    const httpParams = new HttpParams()
      // .set('grant_type', 'password')
      .set('username', username)
      .set('password', password);
    let authResult: Observable<AuthResponse> = this.http.post<AuthResponse>(this.LOGIN_URL, httpParams.toString()/*, httpOptions*/);
    authResult.subscribe(this.activateSession);
    return authResult;
  }

  logout() { // TODO: Fix the CSRF thing with revoke_token
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     "Content-Type": "application/x-www-form-urlencoded",
    //     "Authorization": "Basic " + btoa(this.CLIENT_ID + ":"),
    //     "WWW-Authenticate": "Basic",
    //     "X-CSRFToken": this.cookieService.get('csrftoken')
    //   }),
    //   withCredentials: true
    // };
    const httpParams = new HttpParams()
      .set('token', this.accessToken)
      .set('client_id', this.CLIENT_ID);
    this.resetStorage();
    this.syncFromStorage();
    this.router.navigate(['.']);
    let authResult: Observable<any> = this.http.post(this.LOGOUT_URL, httpParams.toString(), httpOptions);
    return authResult;
  }

  loggedIn(): boolean {
    this.syncFromStorage();
    return this.expiresAt > moment().valueOf();
  }

  private syncFromStorage(): void {
    this.accessToken = localStorage.getItem("access_token");
    this.refreshToken = localStorage.getItem("refresh_token");
    this.expiresAt = parseInt(localStorage.getItem("expires_at"));
  }

  private resetStorage(): void {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("expires_at");
  }

  private activateSession(authResult: AuthResponse): void {
    console.log(authResult);
    const expiresAt = moment().add(authResult.expires_in, "second");
    localStorage.setItem("access_token", authResult.access_token);
    localStorage.setItem("refresh_token", authResult.refresh_token);
    localStorage.setItem("expires_at", expiresAt.valueOf().toString());
  }

}
