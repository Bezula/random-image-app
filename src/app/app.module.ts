import { NgModule } from '@angular/core';
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
import { TestComponent } from './shared/test/test.component';
import { CustomFormsModule } from './shared/forms';

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
    CustomFormsModule,
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    SideNavComponent,
    RandomComponent,
    TopBarComponent,
    PhotoCardComponent,
    PhotoGridComponent,
    TestComponent,
  ],
  bootstrap: [AppComponent],
  providers: [httpInterceptors],
})
export class AppModule {}
