import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {WebHttpInterceptor} from './core/interceptor/web-http-interceptor';
import {LayoutComponent} from './layout/layout/layout.component';
import {LayoutModule} from './layout/layout.module';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {MatToolbarModule} from '@angular/material';
import {ProspectModule} from './pages/prospect/prospect.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MapModule} from './pages/map/map.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NotFoundComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      LayoutModule,
      HttpClientModule,
      MatToolbarModule,
      ProspectModule,
      MapModule,
      BrowserAnimationsModule
    ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: WebHttpInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
