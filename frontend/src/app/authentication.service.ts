import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, Subscription } from "rxjs";
import { tap } from "rxjs/operators";
import * as moment from "moment";
import { AuthResponse } from "./oauth-response";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {

  private LOGIN_URL: string = "/o/token/";
  private LOGOUT_URL: string = "/o/revoke_token";

  private CLIENT_ID: string = "pvgEWnLsB1GGP0qAvIPN2OrkamQUKj5h16UH8iXp"; // Not secret

  private accessToken: string;
  private refreshToken: string;
  private expiresAt: number;

  constructor(private http: HttpClient) { }

  // TODO: plug Angular into django authentication system

  login(username: string, password: string): Observable<AuthResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic " + btoa(this.CLIENT_ID + ":")
      })
    };
    const httpParams = new HttpParams()
      .set('grant_type', 'password')
      .set('username', username)
      .set('password', password);
    let authResult: Observable<AuthResponse> = this.http.post<AuthResponse>(this.LOGIN_URL, httpParams.toString(), httpOptions);
    authResult.subscribe(this.activateSession);
    return authResult;
  }

  logout() { // TODO: Fix the CSRF thing with revoke_token
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic " + btoa(this.CLIENT_ID + ":"),
        "WWW-Authenticate": "Basic"
      }),
      withCredentials: true
    };
    this.syncFromStorage();
    const httpParams = new HttpParams()
      .set('token', this.accessToken)
      .set('client_id', this.CLIENT_ID);
    let authResult: Observable<any> = this.http.post(this.LOGOUT_URL, httpParams.toString(), httpOptions);
    authResult.subscribe(() => {
      this.resetStorage();
      this.syncFromStorage();
    }); // TODO: Check if the response indicates success
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
