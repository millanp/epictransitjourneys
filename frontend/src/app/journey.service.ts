import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JourneysResponse, Journey } from './response-types';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {

  private JOURNEY_LIST_URL: string = "/api/journeys/";
  private NEW_JOURNEY_URL: string = "/api/journeys/new/";

  constructor(private http: HttpClient, private cookieService: CookieService, private authService: AuthenticationService) { }

  getJourneys(): Observable<JourneysResponse> {
    return this.http.get<JourneysResponse>(this.JOURNEY_LIST_URL);
  }

  pushJourney(journey: Journey) {
    this.http.post(this.NEW_JOURNEY_URL, journey).subscribe((response) => {
      console.log(response);
    });
  }

}
