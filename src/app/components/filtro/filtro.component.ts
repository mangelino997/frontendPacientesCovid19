import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  // define el formulario
  public formularioFiltro: FormGroup;
  
  constructor() { }

  ngOnInit(): void {

    // inicializa el formulario
    this.formularioFiltro = new FormGroup({
      nombre: new FormControl(null),
      dni: new FormControl(null, [Validators.minLength(8), Validators.maxLength(8)]),
      estado: new FormControl('Todos'),
    })
  }

  //
  public mostrar(){
    console.log(this.formularioFiltro.value);
  }

}
