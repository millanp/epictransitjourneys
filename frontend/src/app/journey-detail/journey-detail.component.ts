import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { JourneyService } from '../journey.service';
import { switchMap } from 'rxjs/operators';
import { Journey } from '../response-types';
import { Observable } from 'rxjs';

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
    private router: Router,
    private service: JourneyService
  ) { }

  ngOnInit() {
    // this.journey$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => {
    //     return this.service.getJourney(params.get('id'));
    //   })
    // );
  }



}
