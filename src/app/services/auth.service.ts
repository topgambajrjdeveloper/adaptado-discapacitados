
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { map } from 'rxjs/operators';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Empleado } from './../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private afsAuth: AngularFireAuth, private afs: AngularFirestore) { }

  // metodo para el registro de empleados, solo por parte del administrador
  registroEmpleados(email: string, password: string) {
    return new Promise ((resolve, reject) => {
      this.afsAuth.auth.createUserWithEmailAndPassword(email, password)
      .then (empleadoData => resolve(empleadoData),
        err => reject(err));
    });
  }


  // metodo para el acceso de los empleados
  accesoEmpleados(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.signInWithEmailAndPassword(email, password)
      .then( empladoData => resolve(empladoData),
      err => reject(err));
    });
  }

  // metodos async para el acceso de los clientes // no habilitados por el momento
  async loginGoogleUser() {
    const credential = await this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    return this.updateUserData(credential.user);
  }

  async loginFacebookUser() {
    const credential = await this.afsAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
    return this.updateUserData(credential.user);
  }

  // cerrar sesión
  cerrarSesion() {
    return this.afsAuth.auth.signOut();
  }

  // se comprueba si esta logueado con cualquiera de los metodos
  isAuth() {
    return this.afsAuth.authState.pipe(map( auth => auth));
  }


  // metodo privado para actualizar los usuarios o empleados
  private updateUserData(user) {}

}
