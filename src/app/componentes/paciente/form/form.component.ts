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
    if (this.dataApi.selected.id == null) {
      const nuevoPaciente = {
        nombre: this.dataApi.selected.nombre,
        apellidos: this.dataApi.selected.apellidos,
        diaConsulta: this.dataApi.selected.diaConsulta,
        horaConsulta: this.dataApi.selected.horaConsulta
      };
      this.dataApi.addPaciente(this.dataApi.selected);
    } else {
      this.dataApi.actualizarPaciente(this.dataApi.selected);
    }
  }

  onReset(): void {
    this.dataApi.selected.nombre = '';
    this.dataApi.selected.apellidos = '';
    this.dataApi.selected.diaConsulta = '';
    this.dataApi.selected.horaConsulta = '';
    this.dataApi.selected = null;
  }









}
