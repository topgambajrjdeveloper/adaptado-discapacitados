import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import {Empleado} from '../../models/index.class';

@Component({
  selector: 'app-acceder',
  templateUrl: './acceder.component.html',
  styleUrls: ['./acceder.component.css']
})
export class AccederComponent implements OnInit {
  empleado: Empleado;
  recordarEmpleado = false;


  constructor( private authService: AuthService,
               public afsAuth: AngularFireAuth,
               private router: Router ) { }

  public email: string = '';
  public password: string = '';
  ngOnInit() {
  }

  onLogin(): void {
    this.authService.accesoEmpleados(this.email, this.password)
    .then((res) => {
      this.onLoginRedirect();
    }).catch(err => console.log('err', err.message));
  }

  onLoginGoogle(): void {
    this.authService.loginGoogleUser()
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }
  onLoginFacebook(): void {
  this.authService.loginFacebookUser()
    .then((res) => {
      this.onLoginRedirect();
    }).catch(err => console.log('err', err.message));
  }

  onLogout() {
    this.authService.cerrarSesion();
  }
  onLoginRedirect(): void {
    this.router.navigate(['privado/mi-perfil']);
  }


}
