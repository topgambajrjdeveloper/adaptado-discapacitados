import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Empleado } from './../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  emplado: Empleado;

  constructor( private afsAuth: AngularFireAuth, private afs: AngularFirestore) { }

  // metodo para el registro de empleados, solo por parte del administrador
  registroEmpleados(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.createUserWithEmailAndPassword(email, pass)
        .then(userData => {
          resolve(userData),
            this.updateUserData(userData.user)
        }).catch(err => console.log(reject(err)))
    });
  }


  // metodo para el acceso de los empleados
  accesoEmpleados(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
        err => reject(err));
    });
  }

  // recuperar password


  // metodos async para el acceso de los clientes // no habilitados por el momento
  loginFacebookUser() {
    return this.afsAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
      .then(credential => this.updateUserData(credential.user))
  }

  loginGoogleUser() {
    return this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(credential => this.updateUserData(credential.user))
  }

  // cerrar sesión
  cerrarSesion() {
    return this.afsAuth.auth.signOut();
  }

  // se comprueba si esta logueado con cualquiera de los metodos
  isAuth() {
  // tslint:disable-next-line: no-shadowed-variable
    return this.afsAuth.authState.pipe(map(auth => auth));
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`empleado/${user.uid}`);
    const data: Empleado = {
      id: user.uid,
      email: user.email,
      roles: {
        trabajador: true
      }
    }
    return userRef.set(data, { merge: true })
  }


  isUserAdmin(userUid) {
    return this.afs.doc<Empleado>(`empleado/${userUid}`).valueChanges();
  }


}
