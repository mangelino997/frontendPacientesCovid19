import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { paciente } from '../models/paciente';

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
      res=>{
        this.set(res);
      }
    );
  }

  public agregarPaciente(nuevoPaciente: paciente) {
    return this.http.post(this.URL + '/pacientes', nuevoPaciente).subscribe(
      res => {
        this.toasterService.success("Paciente evaluado con éxito", '', { closeButton: true });
        // para que refleje el cambio mediante el subject
        this.obtenerPacientes(); 
      },
    )
  }

  public cambiarEstado(paciente: any) {
    return this.http.put(this.URL + '/pacientes/'+ paciente.id + '/status', paciente);
  }

}
