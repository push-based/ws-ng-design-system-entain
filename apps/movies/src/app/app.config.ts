import { ApplicationConfig } from '@angular/core';
import { provideRouter, Route } from '@angular/router';

export const appRoutes: Route[] = [];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)],
};
