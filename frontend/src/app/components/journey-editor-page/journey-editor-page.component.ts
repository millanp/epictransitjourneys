import { Component, OnInit } from '@angular/core';
import { Journey } from 'src/app/response-types';
import { JourneyService } from 'src/app/services/journey.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-journey-editor-page',
  templateUrl: './journey-editor-page.component.html',
  styleUrls: ['./journey-editor-page.component.scss']
})
export class JourneyEditorPageComponent implements OnInit {

  journey: Journey;
  
  constructor(public journeyService: JourneyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.journeyService.getJourney(parseInt(params.get('id'))).subscribe((journey: Journey) => {
        this.journey = journey;
      });
    });
  }

  onJourneyReceived(journey: Journey) {

  }

}
