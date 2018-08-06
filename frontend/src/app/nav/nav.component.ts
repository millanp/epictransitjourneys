import { Component, OnInit, Input } from '@angular/core';
import { NavRoutes } from '../nav-routes';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() routes: NavRoutes;

  constructor() { }

  ngOnInit() {
  }

}