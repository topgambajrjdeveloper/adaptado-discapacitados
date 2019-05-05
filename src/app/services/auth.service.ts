
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { Empleado } from './../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor( private afsAuth: AngularFireAuth, private afs: AngularFirestore) {}

  // metodo para el registro de empleados, solo por parte del administrador
  registroEmpleados(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(userData => {
          resolve(userData),
            this.actualizarEmpleado(userData.user)
        }).catch(err => console.log(reject(err)))
    });
  }


  // metodo para el acceso de los empleados
  accesoEmpleados(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
        err => reject(err));
    });
  }

  // metodos async para el acceso de los clientes // no habilitados por el momento
  async loginGoogleUser() {
    const credential = await this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    return this.actualizarEmpleado(credential.user);
  }

  async loginFacebookUser() {
    const credential = await this.afsAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
    return this.actualizarEmpleado(credential.user);
  }

  // cerrar sesión
  cerrarSesion() {
    return this.afsAuth.auth.signOut();
  }

  // se comprueba si esta logueado con cualquiera de los metodos
  isAuth() {
// tslint:disable-next-line: no-shadowed-variable
      return this.afsAuth.authState.pipe(map( auth => auth));
  }


  // metodo privado para actualizar los usuarios o empleados
  actualizarEmpleado(empleado) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`mi-perfil/${empleado.id}`);
    const data: Empleado = {
      id: empleado.id,
      email: empleado.email,
      roles: {
        trabajador: true
      }
    }
    return userRef.set(data, { merge: true })
  }

  isUserAdmin(userUid) {
    return this.afs.doc<Empleado>(`mi-perfil/${userUid}`).valueChanges();
  }



}
