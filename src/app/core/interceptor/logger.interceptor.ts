import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  // const loggerService = inject(LoggerService); // inject the logger service

  return next(req).pipe(
    tap({
      next: () => console.log('Request sent', req.urlWithParams),
      error: () => console.error('Request failed', req),
      complete: () => console.log('Request completed', req.urlWithParams),
    })
  );
};
