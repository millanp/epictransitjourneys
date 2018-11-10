import { Component, OnInit } from '@angular/core';
import { JourneyService } from '../journey.service';
import { JourneysResponse } from '../response-types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private journeys: JourneysResponse;

  constructor(private journeyService: JourneyService) { }

  ngOnInit() {
    this.journeyService.getJourneys().subscribe((journeysRes: JourneysResponse) => {
      console.log(journeysRes);
      this.journeys = journeysRes;
    })
  }



}
