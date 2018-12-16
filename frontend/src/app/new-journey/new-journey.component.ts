import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Converter } from 'showdown';
import { JourneyService } from '../journey.service';

@Component({
  selector: 'app-new-journey',
  templateUrl: './new-journey.component.html',
  styleUrls: ['./new-journey.component.scss']
})
export class NewJourneyComponent implements OnInit {

  private name: string;
  private schedule: string;
  private markdownPreview: string = "";

  constructor(private router: Router, private journeyService: JourneyService) { }

  ngOnInit() {
  }

  onSubmit() {
    // submit however i will
    console.log("submitting");
    this.journeyService.pushJourney({name: this.name, markdown: this.schedule});
  }

  showPreview() {
    this.markdownPreview = (new Converter({tables: true})).makeHtml(this.schedule);
  }

}

