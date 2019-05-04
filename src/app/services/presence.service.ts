import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import { tap, map, switchMap, first } from 'rxjs/operators';
import { TouchSequence } from 'selenium-webdriver';
import { of } from 'rxjs';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class PresenceService {

  public empleado: Empleado;

  constructor(private afsAuth: AngularFireAuth, private db: AngularFireDatabase) {
    console.log('Vaya qué presencia');
    this.updateOnUser().subscribe();
    this.updateOnDisconnect().subscribe();
    this.updateOnAway();
  }

  getPresence(uid: string) {
    return this.db.object(`status/${uid}`).valueChanges();
  }

  getEmpleado() {
    return this.afsAuth.authState.pipe(first()).toPromise();
  }


 async setPresence(status: string) {
    const empleado = await this.getEmpleado();
    if (empleado) {
      return this.db.object(`status/${empleado.uid}`).update({ status, timestamp: this.timestamp });
    }
  }

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  // Actualiza el estado cuando se inicia la conexión iniciada en Firebase
  updateOnUser() {
    const connection = this.db.object('.info/connected').valueChanges().pipe(
      map(connected => connected ? 'online' : 'offline')
    );

    return this.afsAuth.authState.pipe(
      switchMap(empleado =>  empleado ? connection : of('offline')),
      tap(status => this.setPresence(status))
    );
  }

  updateOnDisconnect() {
    return this.afsAuth.authState.pipe(
      tap(empleado => {
        if (empleado) {
          this.db.object(`status/${empleado.uid}`).query.ref.onDisconnect()
            .update({
              status: 'offline',
              timestamp: this.timestamp
          });
        }
      })
    );
  }

async signOut() {
    await this.setPresence('offline');
    await this.afsAuth.auth.signOut();
}

// User navigates to a new tab, case 3
updateOnAway() {
  document.onvisibilitychange = (e) => {

    if (document.visibilityState === 'hidden') {
      this.setPresence('away');
    } else {
      this.setPresence('online');
    }
  };
}

}
