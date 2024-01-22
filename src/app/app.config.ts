import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import localePtBR from "@angular/common/locales/pt"; // Importa o locale pt
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePtBR);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),{provide: LOCALE_ID, useValue: 'pt-BR'}]
};
