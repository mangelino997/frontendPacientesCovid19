import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-diagnostico',
  templateUrl: './registro-diagnostico.component.html',
  styleUrls: ['./registro-diagnostico.component.css']
})
export class RegistroDiagnosticoComponent implements OnInit {

  // define el formulario
  public formularioDiagnostico: FormGroup;

  constructor() { }

  ngOnInit(): void {
    
    // inicializa el formulario
    this.formularioDiagnostico = new FormGroup({
      nombre: new FormControl(null,  Validators.required),
      dni: new FormControl(null, [
        Validators.required,
        Validators.minLength(8), 
        Validators.maxLength(8)]),
      mareo: new FormControl('No'),
      hipertension: new FormControl('No'),
      edad: new FormControl(null,  Validators.required),
      fiebre: new FormControl(null,  Validators.required),
      presion: new FormControl(null,  Validators.required),
    })
  }

  //
  public mostrar(){
    console.log(this.formularioDiagnostico.value);
  }

}