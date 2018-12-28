import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Journey, JourneyManifestResponse } from './response-types';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {

  private JOURNEY_LIST_URL: string = "/api/journeys/";
  private NEW_JOURNEY_URL: string = "/api/journeys/new/";
  private JOURNEY_DETAIL_URL_STEM: string = "/api/journeys/";

  constructor(private http: HttpClient, private cookieService: CookieService, private authService: AuthenticationService) { }

  getJourneys(): Observable<JourneyManifestResponse> {
    return this.http.get<JourneyManifestResponse>(this.JOURNEY_LIST_URL);
  }

  getJourney(id: number): Observable<Journey> {
    return this.http.get<Journey>(this.JOURNEY_DETAIL_URL_STEM + id + "/"); // TODO: find a better way to do this string concat
  }

  pushJourney(journey: Journey): Observable<Journey> {
    return this.http.post<Journey>(this.NEW_JOURNEY_URL, journey);
  }

}
