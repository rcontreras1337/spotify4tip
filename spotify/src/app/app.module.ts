import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { injectSessionInterceptor } from '@core/interceptors/inject-session.interceptor';

@NgModule({
  declarations: [ // Solo declaraciones, componentes, directivas, pipes
    AppComponent
  ],
  imports: [ // Solo modulos
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    CookieService,
    provideHttpClient(
      withInterceptors([injectSessionInterceptor])  // Registrar el interceptor basado en función
    ),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
