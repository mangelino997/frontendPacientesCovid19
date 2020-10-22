import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ErrorNotifierService implements HttpInterceptor {

  constructor(private toasterService: ToastrService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): any {
    return next.handle(request).pipe(
      tap(
        event => {
        },
        error => {
          if (error instanceof HttpErrorResponse) {
            this.toasterService.error(error.message, error.name, { closeButton: true });
          }
        }
      ));

  }
}
