import { Component, OnInit } from '@angular/core';
import { DataApiService } from './../../../services/data-api.service';


@Component({
  selector: 'app-info-paciente-tabla',
  templateUrl: './info-paciente-tabla.component.html',
  styleUrls: ['./info-paciente-tabla.component.css']
})
export class InfoPacienteTablaComponent implements OnInit {


  constructor(public dataApi: DataApiService) { }


  ngOnInit() {}

  onSaveForm() {

  }

  onNewForm() {

  }

}
