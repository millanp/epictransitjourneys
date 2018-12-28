import { Component, OnInit } from '@angular/core';
import { JourneyService } from '../../services/journey.service';
import { JourneysResponse, JourneyManifestResponse, JourneyManifest } from '../../response-types';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public journeys: JourneyManifestResponse;

  constructor(private journeyService: JourneyService, public authService: AuthenticationService) { }

  ngOnInit() {
    this.journeyService.getJourneys().subscribe((journeysRes: JourneyManifestResponse) => {
      this.journeys = journeysRes;
    })
  }

  deleteItem(journey: JourneyManifest) {
    this.journeyService.deleteJourney(journey).subscribe(() => {
      this.ngOnInit();
    });
  }

}
