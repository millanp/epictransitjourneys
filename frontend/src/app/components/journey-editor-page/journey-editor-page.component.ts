import { Component, OnInit } from '@angular/core';
import { Journey, JourneyWithPk } from 'src/app/response-types';
import { JourneyService } from 'src/app/services/journey.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-journey-editor-page',
  templateUrl: './journey-editor-page.component.html',
  styleUrls: ['./journey-editor-page.component.scss']
})
export class JourneyEditorPageComponent implements OnInit {

  journey: JourneyWithPk;
  
  constructor(public journeyService: JourneyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.journeyService.getJourney(parseInt(params.get('id'))).subscribe((journey: JourneyWithPk) => {
        this.journey = journey;
      });
    });
  }

  onJourneyReceived(journey: Journey) {
    console.log(journey);
    this.journeyService.updateJourney({...journey, pk: this.journey.pk}).subscribe((response: JourneyWithPk) => {
      this.router.navigate(['/journeys', response.pk]);
    });
  }

}
