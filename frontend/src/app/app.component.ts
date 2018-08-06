import { Component } from '@angular/core';
import { navRoutes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  navRoutes = navRoutes;
  monkeys: number[] = [1,2,3,4,5,6];
}
