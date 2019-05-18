import { Component, OnInit, Inject } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
@Component({
  selector: 'app-form-modal',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor( public dataApi: DataApiService) { }

  ngOnInit() {
  }

  onSaveForm() {
    if (this.dataApi.selectedPaciente.id == null) {
      const nuevoPaciente = {
        nombre: this.dataApi.selectedPaciente.nombre,
        apellidos: this.dataApi.selectedPaciente.apellidos,
        diaConsulta: this.dataApi.selectedPaciente.diaConsulta,
        horaConsulta: this.dataApi.selectedPaciente.horaConsulta
      };
      this.dataApi.addPaciente(this.dataApi.selectedPaciente.id);
    } else {
      this.dataApi.actualizarPaciente(this.dataApi.selectedPaciente.id);
    }
  }

  onReset(): void {
    this.dataApi.selectedPaciente.nombre = '';
    this.dataApi.selectedPaciente.apellidos = '';
    this.dataApi.selectedPaciente.diaConsulta = '';
    this.dataApi.selectedPaciente.horaConsulta = '';
    this.dataApi.selectedPaciente = null;
  }



}
