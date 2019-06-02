import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataApiService } from '../../../services/data-api.service';
import { Pacientes } from '../../../models/index.class';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
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

  constructor( public dataApi: DataApiService,
               private authService: AuthService,
               private router: Router,
               private storage: AngularFireStorage) { }

  ngOnInit() {
    this.onReset();
  }

  onSubmitPaciente({value}: {value: Pacientes}) {
    value.fechaAltaPaciente = (new Date()).getTime();
    this.authService.isAuth().subscribe( user => {
      value.userUid = user.uid;
      value.fullname = user.email;
      this.dataApi.addPaciente(value);
    });
    this.router.navigate(['/paciente/ficha-paciente', value.id]);
  }

  uploadFile(event) {
    console.log(event);
    // console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = event.target.files[0];
    const filePath = `uploads/paciente_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
  }


  onReset(): void {
    this.paciente.fullname = '';
    this.paciente.email = '';
    this.paciente.photoUrl = '';
    this.paciente.phoneNumber = '';
    this.paciente.dni = '';
    this.paciente.nacimiento = '';
    this.paciente.sexo = '';
    this.paciente.id = '';
  }

}
