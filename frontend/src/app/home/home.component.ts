import { Component, OnInit } from '@angular/core';
import { JourneyService } from '../journey.service';
import { JourneysResponse, JourneyManifestResponse } from '../response-types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public journeys: JourneyManifestResponse;

  constructor(private journeyService: JourneyService) { }

  ngOnInit() {
    this.journeyService.getJourneys().subscribe((journeysRes: JourneyManifestResponse) => {
      console.log(journeysRes);
      this.journeys = journeysRes;
    })
  }



}
