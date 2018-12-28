import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import * as moment from "moment";
import { AuthResponse } from "../response-types";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";


@Injectable({
  providedIn: "root"
})
export class AuthenticationService {

  private LOGIN_URL: string = "/o/token/";
  private LOGOUT_URL: string = "/o/revoke_token/";

  public CLIENT_ID: string = "pvgEWnLsB1GGP0qAvIPN2OrkamQUKj5h16UH8iXp"; // Not secret

  private accessToken: string;
  private refreshToken: string;
  private expiresAt: number;

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) { }

  login(username: string, password: string): Observable<AuthResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Basic " + btoa(this.CLIENT_ID + ":")
      })
    };
    let authResult: Observable<AuthResponse> = this.http.post<AuthResponse>(this.LOGIN_URL, {
      grant_type: 'password',
      username: username,
      password: password
    }, httpOptions);
    authResult.subscribe(this.activateSession);
    return authResult;
  }

  logout() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Basic " + btoa(this.CLIENT_ID + ":"),
      }),
    };
    this.resetStorage();
    this.syncFromStorage();
    this.router.navigate(['.']);
    let authResult: Observable<any> = this.http.post(this.LOGOUT_URL, {'token': this.accessToken}, httpOptions);
    return authResult;
  }

  loggedIn(): boolean {
    this.syncFromStorage();
    if (this.refreshToken) {
      return true;
    }
    return false
  }

  getToken(): Observable<string> {
    // TODO: make this more comprehensive
    if (this.expiresAt > moment().valueOf()) {
      return of(localStorage.getItem("access_token"));
    }
    return this.getRefreshedToken().pipe<string>(map((resp: AuthResponse) => {
      this.activateSession(resp);
      return resp.access_token;
    }))
  }

  private getRefreshedToken(): Observable<AuthResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Basic " + btoa(this.CLIENT_ID + ":"),
      }),
    };
    return this.http.post<AuthResponse>(this.LOGIN_URL, {
      'grant_type': 'refresh_token',
      'refresh_token': this.refreshToken
    }, httpOptions);
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
    const expiresAt = moment().add(authResult.expires_in, "second");
    localStorage.setItem("access_token", authResult.access_token);
    localStorage.setItem("refresh_token", authResult.refresh_token);
    localStorage.setItem("expires_at", expiresAt.valueOf().toString());
  }

}
