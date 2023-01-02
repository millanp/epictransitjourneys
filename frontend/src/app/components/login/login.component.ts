import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../services/authentication.service";
import { Observable } from 'rxjs';
import { AuthResponse } from '../../response-types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private username: string;
  private password: string;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    let loginPromise: Observable<AuthResponse> = this.authService.login(this.username, this.password);
    loginPromise.subscribe(
      (response) => {
        this.router.navigate(['my-account']);
      },
      (error) => {
        this.displayLoginError();
      }
    );
  }

  displayLoginError() {
    console.log('hello');
  }
}
