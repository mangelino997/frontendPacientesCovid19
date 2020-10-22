import { Component, Input, OnInit } from '@angular/core';
import { pacienteEvaluado } from 'src/app/models/pacienteEvaluado';
import { PacienteService } from '../../../services/paciente.service';

@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.css']
})
export class FilaComponent implements OnInit {

  @Input() backgroundColor: string;
  @Input() fila: pacienteEvaluado[] = [];

  constructor(private pacienteService: PacienteService) { }
  ngOnInit(): void { }

  public actualizarEstado(paciente: pacienteEvaluado): void {
    this.pacienteService.actualizarEstado(paciente);
  }
}
