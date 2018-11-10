import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {

  private JOURNEY_LIST_STRING: string = "/api/journeys/"

  constructor(private http: HttpClient) { }

  getJourneys() {
    // TODO: find out how to serialize the journey list given by server
    this.http.get<any>(this.JOURNEY_LIST_STRING)
  }

}
