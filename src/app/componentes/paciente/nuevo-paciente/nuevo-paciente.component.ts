import { Component, OnInit } from '@angular/core';
import { DataApiService } from './../../../services/data-api.service';

@Component({
  selector: 'app-nuevo-paciente',
  templateUrl: './nuevo-paciente.component.html',
  styleUrls: ['./nuevo-paciente.component.css']
})
export class NuevoPacienteComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  ngOnInit() {
  }

}
