import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { JourneyService } from '../../services/journey.service';
import { switchMap } from 'rxjs/operators';
import { Journey } from '../../response-types';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-journey-detail',
  templateUrl: './journey-detail.component.html',
  styleUrls: ['./journey-detail.component.scss']
})
export class JourneyDetailComponent implements OnInit {
  journey$: Observable<Journey>;
  tableHTML: string;

  constructor(
    private route: ActivatedRoute,
    private service: JourneyService,
    public authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.journey$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.service.getJourney(parseInt(params.get('id')));
      })
    );
  }

  onJourneyReceived(journey: Journey) {

  }

}
