// main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { importProvidersFrom, StaticProvider } from '@angular/core'; // Import StaticProvider
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';
import { appConfig } from './app/app.config';

// platformBrowserDynamic().bootstrapModule(AppComponent, {
//   providers: [importProvidersFrom(BrowserModule, RouterModule.forRoot(routes)) as unknown as StaticProvider[]], // Cast to StaticProvider[]
// }).catch((err) => console.error(err));


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
