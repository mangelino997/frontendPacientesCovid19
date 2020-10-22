import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { paciente } from '../models/paciente';
import { pacienteEvaluado } from '../models/pacienteEvaluado';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private URL: string = 'http://localhost:8080/api';
  private subject$ = new BehaviorSubject([]);
  public filas = [];

  constructor(private http: HttpClient, private toasterService: ToastrService) {
    this.obtenerPacientes();
  }

  public set(newSate) {
    this.filas = newSate;
    this.subject$.next(this.filas);
  }

  public select$(): Observable<any> {
    return this.subject$.asObservable();
  }

  public obtenerPacientes(): any {
    this.http.get(this.URL + '/pacientes').subscribe(
      res => {
        this.set(res);
      }
    );
  }

  public agregarPaciente(nuevoPaciente: paciente) {
    return this.http.post(this.URL + '/pacientes', nuevoPaciente).subscribe(
      res => {
        this.toasterService.success("Paciente evaluado con éxito", '', { closeButton: true });
        // refleja el cambio con el subject
        this.obtenerPacientes();
      },
    )
  }

  public actualizarEstado(paciente: pacienteEvaluado) {
    return this.http.get(this.URL + '/pacientes/' + paciente.id + '/status')
      .subscribe(
        (res: pacienteEvaluado) => {
          this.toasterService.success("Paciente " + res.name + " atendido.", '', { closeButton: true });
          this.obtenerPacientes();
        }
      );
  }

}
