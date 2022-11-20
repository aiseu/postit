import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpAsyncModule } from './modules/http-async/http-async.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from './modules/http-async/interceptors/base-url.interceptor';
import { BearerTokenInterceptor } from './modules/http-async/interceptors/bearer-token.interceptor';
import { HttpAsyncHeadersInterceptor } from './modules/http-async/interceptors/http-async-headers.interceptor';
import { RetryInterceptor } from './modules/http-async/interceptors/retry.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpAsyncModule.withConfig({
    baseUrl: environment.baseUrl,
    defaultHeaders: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    bearerTokenKey: environment.token
  })],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: BearerTokenInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: HttpAsyncHeadersInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
