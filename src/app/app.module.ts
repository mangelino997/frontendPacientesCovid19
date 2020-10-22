import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

/* Components */
import { RegistroDiagnosticoComponent } from './components/registro-diagnostico/registro-diagnostico.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { PacienteService } from './services/paciente.service';
import { TablaFilaComponent } from './components/tabla-fila/tabla-fila.component';
import { FilaComponent } from './components/tabla-fila/fila/fila.component';
import { ErrorNotifierService } from './interceptors/error-notifier.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistroDiagnosticoComponent,
    FiltroComponent,
    TablaFilaComponent,
    FilaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorNotifierService,
      multi: true
    },
    PacienteService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
