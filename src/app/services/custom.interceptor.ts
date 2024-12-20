import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class CustomInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("token");
    request = request.clone({
      headers: request.headers.set("Authorization", "Bearer " + token),
    });
    return next.handle(request);
  }
}
