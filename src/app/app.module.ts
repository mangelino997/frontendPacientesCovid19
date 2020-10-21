import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* Components */
import { RegistroDiagnosticoComponent } from './components/registro-diagnostico/registro-diagnostico.component';
import { FiltroComponent } from './components/filtro/filtro.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroDiagnosticoComponent,
    FiltroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
