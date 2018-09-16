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

  private CLIENT_ID: string = "pvgEWnLsB1GGP0qAvIPN2OrkamQUKj5h16UH8iXp"; // Not secret

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

  private activateSession(authResult: AuthResponse) {
    console.log(authResult);
    const expiresAt = moment().add(authResult.expires_in, "second");
    localStorage.setItem("access_token", authResult.access_token);
    localStorage.setItem("refresh_token", authResult.refresh_token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

}
