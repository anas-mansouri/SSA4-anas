import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
<<<<<<< HEAD
import { provideRouter, withComponentInputBinding } from '@angular/router';
=======
import { provideRouter } from '@angular/router';
>>>>>>> 0da46011c4d41811833ef7f32ded61b4167333ce

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
<<<<<<< HEAD
    provideRouter(routes,withComponentInputBinding())
=======
    provideRouter(routes)
>>>>>>> 0da46011c4d41811833ef7f32ded61b4167333ce
  ]
};
