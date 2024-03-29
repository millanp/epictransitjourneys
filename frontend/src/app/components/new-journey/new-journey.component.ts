import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JourneyService } from '../../services/journey.service';
import { Journey, JourneyWithPk } from '../../response-types';

@Component({
  selector: 'app-new-journey',
  templateUrl: './new-journey.component.html',
  styleUrls: ['./new-journey.component.scss']
})
export class NewJourneyComponent implements OnInit {

  public name: string;
  public schedule: string;
  public markdownPreview: string = "";
  public displayPreview: boolean = false;

  constructor(private router: Router, private journeyService: JourneyService) { }

  ngOnInit() {
  }

  // onSubmit() {
  //   // submit however i will
  //   console.log("submitting");
  //   this.journeyService.pushJourney({name: this.name, markdown: this.schedule});
  // }

  showPreview() {
    this.displayPreview = true;
  }

  onJourneyReceived(journey: Journey) {
    console.log(journey);
    this.journeyService.pushJourney(journey).subscribe((response: JourneyWithPk) => {
      console.log(response);
      this.router.navigate(['/journeys', response.pk]);
    });
  }

}

