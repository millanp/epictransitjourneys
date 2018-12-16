import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthenticationService, private cookieService: CookieService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // var cloneOptions = {
        //     headers: new HttpHeaders({
        //         "Content-Type": "application/x-www-form-urlencoded",
        //         "Authorization": "Basic " + btoa(this.authService.CLIENT_ID + ":"),
        //         "WWW-Authenticate": "Basic",
        //         "X-CSRFToken": this.cookieService.get('csrftoken')
        //     }),
        //     withCredentials: true
        // };
        // if (this.authService.loggedIn()) {
        //     // clone request and add token/client id headers
        //     cloneOptions.
        // }
        const authReq = req.clone();
        // add client id header regardless
        return next.handle(authReq);
    }
}