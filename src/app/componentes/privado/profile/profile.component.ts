import { Component, OnInit } from '@angular/core';
import { AuthService, DataApiService } from '../../../services/index.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, database } from 'firebase/app';
import { Router, ActivatedRoute, Params} from '@angular/router';

import {Empleado} from '../../../models/index.class';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService,
              public afAuth: AngularFireAuth,
              private dataApi: DataApiService,
              private route: ActivatedRoute,
              private router: Router) { }
              idEmpleado: string;

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
  public providerId = 'null';

  ngOnInit() {
    this.comprarUsuarioLogueado();

  }

  comprarUsuarioLogueado() {
    this.authService.isAuth().subscribe(empleado => {
      if (empleado) {
        this.empleado.id = empleado.uid;
        this.empleado.phoneNumber = empleado.phoneNumber;
        this.empleado.email = empleado.email;
        this.empleado.photoUrl = empleado.photoURL;
        this.empleado.nombre = empleado.displayName;
        this.providerId = empleado.providerData[0].providerId;
      }
    });
  }

  loadProfile() {
    // tslint:disable-next-line: no-string-literal
    this.idEmpleado = this.route.snapshot.params['id'];
    this.dataApi.getOneEmpleado(this.idEmpleado).subscribe( empleado => this.empleado = empleado);
  }

  editarPerfil(empleado: Empleado) {
    console.log(empleado);
    // this.route.navigate(['privado/editar-perfil', empleado.id]);
  }
  deletePerfil(empleado: Empleado) {
    console.log(empleado);
  }
}
