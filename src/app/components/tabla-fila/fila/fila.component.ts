import { Component, Input, OnInit } from '@angular/core';
import { pacienteEvaluado } from 'src/app/models/pacienteEvaluado';

@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.css']
})
export class FilaComponent implements OnInit {
  
  @Input() backgroundColor: string;
  @Input() fila: pacienteEvaluado[]=[];

  constructor() {}

  ngOnInit(): void {}

}
