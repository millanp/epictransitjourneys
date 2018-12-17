import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JourneysResponse, Journey, JourneyManifestResponse } from './response-types';
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

  getJourneys(): Observable<JourneyManifestResponse> {
    return this.http.get<JourneyManifestResponse>(this.JOURNEY_LIST_URL);
  }

  // getJourney(id: )

  pushJourney(journey: Journey) {
    this.http.post(this.NEW_JOURNEY_URL, journey).subscribe((response) => {
      console.log(response);
    });
  }

}
