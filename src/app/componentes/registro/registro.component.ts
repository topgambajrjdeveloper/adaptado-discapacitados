import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { auth } from 'firebase/app';
import { AuthService } from '../../services/auth.service';
import { FirebaseStorageService } from '../../services/firebase-storage.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public email: '';
  public password: '';
  public isAdmin: false;
  public empleado: Empleado;
  public noRegisterSocial: false;

  constructor(private router: Router, private authService: AuthService, private uploadService: FirebaseStorageService) { }

  ngOnInit() {
  }

  // funcuon para subir avatar de empleado


  // acceso para solo pacientes
  onLoginGoogle(): void {
    this.authService.loginGoogleUser()
    .then((res) => {
        this.router.navigate(['privado/mi-perfil']);
    }).catch(err => console.log('err', err.message));
  }

  onLoginFacebook(): void {
    this.authService.loginFacebookUser()
    .then((res) => {
        this.onSocialRedirect();
    }).catch(err => console.log('err', err.message));
  }

  // registro de usuarios con firebase
  registroEmpleado(email, password) {
    this.authService.registroEmpleados(this.email, this.password)
    .then((res) => {
      this.router.navigate(['privado/citas']);
    }).catch(err => console.log('err', err.message));
  }


  onLoginRedirect(): void {
    this.router.navigate(['privado/citas']);
  }

  onSocialRedirect(): void {
    this.router.navigate(['privado/mi-perfil']);
  }

}
