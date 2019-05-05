import { Component, OnInit } from '@angular/core';
import { DataApiService } from './../../../services/data-api.service';

@Component({
  selector: 'app-ficha-paciente',
  templateUrl: './ficha-paciente.component.html',
  styleUrls: ['./ficha-paciente.component.css']
})
export class FichaPacienteComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  ngOnInit() {
  }

}
