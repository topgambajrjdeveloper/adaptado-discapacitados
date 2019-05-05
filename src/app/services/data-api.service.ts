import { Injectable } from '@angular/core';
// se importa el firestore
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';

// se importan los modelos
import { Empleado } from '../models/empleado';
import { Pacientes } from '../models/pacientes';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor( private afs: AngularFirestore) {
    this.empleadoCollection = afs.collection<Empleado>('empleado');
    this.empleadoCollection.valueChanges();

    this.pacienteCollection = afs.collection<Pacientes>('pacientes');
    this.pacienteCollection.valueChanges();
  }

  // se crear la conexion para EMPLEADO firestore
  private empleadoCollection: AngularFirestoreCollection<Empleado>;
  private empleado: Observable<Empleado>[];


  // se crear la conexion para PACIENTES firestore
  private pacienteCollection: AngularFirestoreCollection<Pacientes>;
  private pacientes: Observable<Pacientes>[];


  // metodos CRUD para empleados
  getAllEmpleado() {
    return this.empleado;
  }

  addEmpleado() {}

  actualizarEmpleado() {}

  borrarEmpleado() {}



  // metodos CRUD para paciente
  getAllPaciente() {

  }

  addPaciente() {}

  actualizarPaciente() {}

  borrarPaciente() {}



}
