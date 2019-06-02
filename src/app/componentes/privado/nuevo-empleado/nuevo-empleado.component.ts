import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '../../../services/data-api.service';
import { AuthService } from '../../../services/auth.service';
import { Empleado } from '../../../models/index.class';




@Component({
  selector: 'app-nuevo-empleado',
  templateUrl: './nuevo-empleado.component.html',
  styleUrls: ['./nuevo-empleado.component.css']
})
export class NuevoEmpleadoComponent implements OnInit {
  empleado: Empleado = {
    id: '',
    userUid: '',
    email: '',
    password: '',
    photoUrl: '',
    nombre: '',
    apellidos: '',
    phoneNumber: '',
    numeroEmpleado: '',
    tipoEspecialista: '',
    domicilio: '',
    edad: '',
    discapacidad: '',
    porcentaje: '',
    dni: '',
    bio: '',
    providerId: '',
    status: '',
    timestamp: Date(),
    roles: null
  };

  constructor(public dataApi: DataApiService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmitEmpleado({value}: {value: Empleado}) {
    value.timestamp = (new Date()).getTime();
    value.fechaIncorporacion = (new Date()).getTime();
    this.authService.isAuth().subscribe( user => {
      value.id = user.uid;
      value.userNombre = user.displayName;
      this.dataApi.addEmpleado(value);
    });
    this.router.navigate(['/privado/mi-perfil']);
  }




}
