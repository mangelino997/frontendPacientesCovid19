import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  // define el formulario
  public formularioFiltro: FormGroup;

  constructor(private pacienteService: PacienteService) { }
  ngOnInit(): void {

    // inicializa el formulario
    this.formularioFiltro = new FormGroup({
      nombre: new FormControl(null),
      dni: new FormControl(null),
      estado: new FormControl('Todos'),
    })
  }

  //Obtiene la lista por filtro
  public listarPorFiltro() {

    /*setea a null en caso que el campo quede con comillas vacias*/
    !this.formularioFiltro.value.nombre && this.formularioFiltro.get("nombre").setValue(null);
    !this.formularioFiltro.value.dni && this.formularioFiltro.get("dni").setValue(null);
    this.formularioFiltro.get("estado").value == 'Todos' && this.formularioFiltro.get("estado").setValue(null);

    this.pacienteService.obtenerPacientesPorFiltro(this.formularioFiltro.value);
  }

}
