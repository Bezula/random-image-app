import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

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

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    MatSidenavModule,
    RouterLinkActive,
    MatListModule,
    RouterLink,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    NgOptimizedImage,
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
export class AppModule {}
