import { Component } from '@angular/core';
import { routes } from './app-routing.module';
import { navRoutesOnly } from './nav-routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  navRoutes = navRoutesOnly(routes);
}
