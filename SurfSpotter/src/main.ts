import { bootstrapApplication } from '@angular/platform-browser';
import { provideAuth0 } from '@auth0/auth0-angular';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAuth0({
      domain: 'surfspotterio.eu.auth0.com',
      clientId: 'TZFjSlmwbmKI0f9BtPJnKKza2jYPXqRW',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ]
}).catch(err => console.error(err));