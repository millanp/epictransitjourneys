import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders
} from '@angular/common/http';

import { Observable, from } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthenticationService, private cookieService: CookieService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.handleAccess(req, next));
    }

    private async handleAccess(req: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
        var newHeaders = {
            "Content-Type": "application/json",
            "X-CSRFToken": this.cookieService.get('csrftoken'),
        }
        if (!req.headers.get("Authorization") && this.authService.loggedIn()) {
            newHeaders["Authorization"] = "Bearer " + await this.authService.getToken().toPromise();
        }
        const authReq = req.clone({setHeaders: newHeaders});
        // add client id header regardless
        return next.handle(authReq).toPromise();
    }
}