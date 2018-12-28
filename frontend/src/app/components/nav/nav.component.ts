import { Component, OnInit, Input } from '@angular/core';
import { NavRoutes } from '../../nav-routes';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() routes: NavRoutes;

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

  logout(): void {
    this.authService.logout().subscribe(res => {
      console.log(res);
    });
  }

}