import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { httpInterceptors } from './core/interceptors';
import {
  LayoutComponent,
  PhotoCardComponent,
  PhotoGridComponent,
  RandomComponent,
  SideNavComponent,
  TopBarComponent,
} from './ui';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    RouterLinkActive,
    RouterLink,
    BrowserAnimationsModule,
    NgOptimizedImage,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    SideNavComponent,
    RandomComponent,
    TopBarComponent,
    PhotoCardComponent,
    PhotoGridComponent,
  ],
  bootstrap: [AppComponent],
  providers: [httpInterceptors],
})
export class AppModule {
  constructor(applicationRef: ApplicationRef) {
    if (!environment.production) {
      // First, store the original tick function
      const originalTick = applicationRef.tick;

      applicationRef.tick = function () {
        // Save start time
        const windowsPerfomance = window.performance;
        const before = windowsPerfomance.now();

        // Run the original tick() function
        const returnValue = originalTick.apply(this);

        // Save end time, calculate the delta, then log to console
        const after = windowsPerfomance.now();
        const runTime = after - before;
        window.console.log('[Profiler] CHANGE DETECTION TIME', runTime, 'ms');
        return returnValue;
      };
    }
  }
}
