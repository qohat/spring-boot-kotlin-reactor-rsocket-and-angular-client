import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class WebHttpInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.handleResponse(event as HttpResponse<any>);
        }
        return event;
      })
    );
  }

  handleResponse(event: HttpResponse<any>) {
    const response = event.body;
    const redirectUri = response.flow ? response.flow.redirect : '';
    if (response.flow !== null) {
      this.router.navigateByUrl('..' + redirectUri);
    } else {
      console.log('Comming flow is null');
    }
  }

}