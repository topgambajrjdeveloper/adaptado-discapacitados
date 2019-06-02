import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataApiService } from '../../../services/data-api.service';
import { Pacientes } from '../../../models/index.class';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-nuevo-paciente',
  templateUrl: './nuevo-paciente.component.html',
  styleUrls: ['./nuevo-paciente.component.css']
})
export class NuevoPacienteComponent implements OnInit {

  idPaciente: string;
  paciente: Pacientes = {
    id: '',
    fullname: '',
    dni: '',
    edad: '',
    nacimiento: '',
    domicilio: '',
    phoneNumber: '',
    photoUrl: '',
    email: '',
    bono: '',
    sexo: '',
    sesiones: '',
    fechaAltaPaciente: '',
    // otros datos
    observaciones: '',
    operaciones: '',
    accidentes: '',
    lesiones: '',
    colectivo: '',
    embarazosCesarias: '',
    diagnosticos: '',
    problemasViscerales: '',
    enfermedades: '',
    alergias: '',
    medicaciones: '',
    tratamientos: '',
    antecedentesFamiliares: '',
    frecuenciaFisioOste: '',
    deporte: '',
    trabaja: '',
    relacionesHallazgos: '',
    otrasOservaciones: '',
    diaConsulta: '',
    horaConsulta: '',
    timestamp: '',
    userNombre: '',
    userUid: ''
  };

  constructor(private dataApi: DataApiService,
              private route: ActivatedRoute,
              private router: Router) { }

    ngOnInit() {
      this.getDetallesPaciente();
    }

    getDetallesPaciente() {
// tslint:disable-next-line: no-string-literal
      this.idPaciente = this.route.snapshot.params['id'];
      this.dataApi.getOnePaciente(this.idPaciente).subscribe( paciente => this.paciente = paciente);
    }

    onModificarPaciente({value}: {value: Pacientes}) {
      value.id = this.idPaciente;
      this.dataApi.actualizarPaciente(value);
      this.router.navigate(['paciente/ficha-paciente/' + this.idPaciente]);
    }

  }

