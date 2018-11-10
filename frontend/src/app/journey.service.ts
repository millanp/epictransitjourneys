import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JourneysResponse } from './response-types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {

  private JOURNEY_LIST_STRING: string = "/api/journeys/"

  constructor(private http: HttpClient) { }

  getJourneys(): Observable<JourneysResponse> {
    return this.http.get<JourneysResponse>(this.JOURNEY_LIST_STRING);
  }

}
