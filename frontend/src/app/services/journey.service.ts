import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Journey, JourneyManifestResponse, JourneyManifest, JourneyWithPk } from '../response-types';
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
  
  private getUpdateUrl(pk: number): string {
    return `/api/journeys/${pk}/update/`;
  }

  constructor(private http: HttpClient, private cookieService: CookieService, private authService: AuthenticationService) { }

  getJourneys(): Observable<JourneyManifestResponse> {
    return this.http.get<JourneyManifestResponse>(this.JOURNEY_LIST_URL);
  }

  getJourney(id: number): Observable<JourneyWithPk> {
    return this.http.get<JourneyWithPk>(this.JOURNEY_DETAIL_URL_STEM + id + "/"); // TODO: find a better way to do this string concat
  }

  pushJourney(journey: Journey): Observable<JourneyWithPk> {
    return this.http.post<JourneyWithPk>(this.NEW_JOURNEY_URL, journey);
  }

  updateJourney(journey: JourneyWithPk): Observable<Journey> {
    return this.http.put<Journey>(this.getUpdateUrl(journey.pk), journey);
  }

}
