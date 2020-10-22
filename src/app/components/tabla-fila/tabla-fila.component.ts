import { Component, Input, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-tabla-fila',
  templateUrl: './tabla-fila.component.html',
  styleUrls: ['./tabla-fila.component.css']
})
export class TablaFilaComponent implements OnInit {

  public filaVerde: Array<any> = [];
  public filaAmarillo: [];
  public filaNaranja: [];
  public filaRojo: [];

  constructor(private pacienteService: PacienteService) {}
  ngOnInit(): void {
    this.listar();
  }

  private listar() {
    this.pacienteService.select$().subscribe(
      res => {
        const { filaVerde, filaAmarillo, filaNaranja, filaRojo } = res;
        this.filaVerde = filaVerde;
        this.filaAmarillo = filaAmarillo;
        this.filaNaranja = filaNaranja;
        this.filaRojo = filaRojo;
      })
  }
}
