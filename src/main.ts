import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/app-routing';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(APP_ROUTES), provideHttpClient()],
}).catch((err) => console.log(err));
