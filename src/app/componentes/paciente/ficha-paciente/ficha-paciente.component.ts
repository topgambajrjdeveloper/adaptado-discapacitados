import { Component, OnInit, Input } from '@angular/core';
import { DataApiService } from '../../../services/index.service';
import { Pacientes } from '../../../models/pacientes';
import { Router, ActivatedRoute, Params } from '@angular/router';
export interface Pacientes { fullname: string; }
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-ficha-paciente',
  templateUrl: './ficha-paciente.component.html',
  styleUrls: ['./ficha-paciente.component.css']
})
export class FichaPacienteComponent implements OnInit {


  constructor(private dataApi: DataApiService, private route: ActivatedRoute, private router: Router, private storage: AngularFireStorage) { }
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


  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    const idPaciente = this.route.snapshot.params['id'];
    this.getDetallesPaciente(idPaciente);

  }

  onComprobarUserLogin() {
  }

  getDetallesPaciente(idPaciente: string): void {
      this.dataApi.getOnePaciente(idPaciente).subscribe(paciente => {
          paciente = paciente;
      });
  }

  loadProfile() {
    // tslint:disable-next-line: no-string-literal
    this.idPaciente = this.route.snapshot.params['id'];
    this.dataApi.getOnePaciente(this.idPaciente).subscribe( paciente => this.paciente = paciente);
  }

  editarPerfil(paciente: Pacientes) {
    console.log(paciente);
    this.router.navigate(['paciente/editar-paciente']);
  }

}
