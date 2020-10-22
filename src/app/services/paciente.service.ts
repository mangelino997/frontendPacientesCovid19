import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { paciente } from '../models/paciente';
import { pacienteEvaluado } from '../models/pacienteEvaluado';
import { filtro } from '../models/filtro';

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

  //Setea el nuevo estado del observale y lo propaga
  public set(newSate) {
    this.filas = newSate;
    this.subject$.next(this.filas);
  }

  //Observable al cual nos subscribimos 
  public select$(): Observable<any> {
    return this.subject$.asObservable();
  }

  //Obtiene las listas completas de pacientes
  public obtenerPacientes(): any {
    this.http.get(this.URL + '/pacientes').subscribe(
      res => {
        this.set(res);
      }
    );
  }

  //Filtra las tablas
  public obtenerPacientesPorFiltro(filtro: filtro): any {
    this.http.post(this.URL + '/pacientes/listarPorFiltros', filtro).subscribe(
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

  //Cambia el estado a Atendido
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
