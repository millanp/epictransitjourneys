import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Journey } from '../../response-types';

@Component({
  selector: 'app-journey-editor',
  templateUrl: './journey-editor.component.html',
  styleUrls: ['./journey-editor.component.scss']
})
export class JourneyEditorComponent implements OnInit {

  @Input() name: string;
  @Input() schedule: string;
  @Output() journey = new EventEmitter<Journey>();

  public markdownPreview: string = "";
  public displayPreview: boolean = false;

  ngOnInit() {
  }

  onSubmit() {
    // submit however i will
    console.log("submitting");
    this.journey.emit({name: this.name, markdown: this.schedule});
  }

  showPreview() {
    this.displayPreview = true;
  }

}
