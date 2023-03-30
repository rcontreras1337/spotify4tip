import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ // DECLARACIONES, COMPONENTES, DIRECTIVAS Y PIPES
    AppComponent,
  ],
  imports: [// IMPORTACIÓN DE OTROS MÓDULOS
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
