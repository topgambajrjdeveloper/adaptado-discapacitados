import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// se importan el modelo paciente
import { Pacientes } from '../models/pacientes';
export interface Pacientes extends Pacientes { id: string; }

// se importan el modelo empleado
import { Empleado } from '../models/empleado';
export interface Empleado extends Empleado { id: string; }

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

public selectedPaciente = {
  id: null,
  nombre: '',
  apellidos: '',
  dni: '',
  edad: '',
  nacimiento: '',
  domicilio: '',
  phoneNumber: '',
  photoUrl: '',
  email: '',
  bono: '',
  sesiones: '',
  observaciones: '',
  operaciones: '',
  accidentes: '',
  lesiones: '',
  sexo: '',
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
  userUid: ''
};

public selectedEmpleado = {
  id: null,
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
  dni: '',
  displayName: '',
  providerId: '',
  status: '',
  timestamp: '',
  roles: ''
};

  constructor( private afs: AngularFirestore) {
    // conexion a BBDD paciente
    this.pacientesCollection = afs.collection<Pacientes>('paciente');
    this.pacientes = this.pacientesCollection.valueChanges();
    // conexion a BBDD empleado
    this.empleadosCollection = afs.collection<Empleado>('empleado');
    this.empleados = this.empleadosCollection.valueChanges();

  }
  // se crear la conexion para PACIENTES firestore
  private pacientesCollection: AngularFirestoreCollection<Pacientes>;
  private pacientes: Observable<Pacientes[]>;
  private pacienteDoc: AngularFirestoreDocument<Pacientes>;
  private paciente: Observable<Pacientes>;

  // metodos CRUD para paciente
  getAllPaciente() {
    this.pacientesCollection = this.afs.collection<Pacientes>('paciente');
    return this.pacientes = this.pacientesCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Pacientes;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }


  // metodo para ver cada paciente
  getOnePaciente(id: string) {
    this.pacienteDoc = this.afs.doc<Pacientes>(`paciente/ficha-paciente/${id}`);
    return this.paciente = this.pacienteDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Pacientes;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  addPaciente(paciente: Pacientes): void {
   this.pacientesCollection.add(paciente);
  }

  // actualizar el paciente
  actualizarPaciente( paciente: Pacientes ) {
    return this.pacientesCollection.doc(paciente.id).update(paciente);
  }

  // borrar el paciente
  borrarPaciente( idPaciente: string): void {
    this.pacienteDoc = this.afs.doc<Pacientes>(`paciente/${idPaciente}`);
    this.pacienteDoc.delete();
  }

  // se crear la conexion para EMPLEADO firestore
  // tslint:disable-next-line: member-ordering
  private empleadosCollection: AngularFirestoreCollection<Empleado>;
  // tslint:disable-next-line: member-ordering
  private empleados: Observable<Empleado[]>;
  // tslint:disable-next-line: member-ordering
  private empleadoDoc: AngularFirestoreDocument<Empleado>;
  // tslint:disable-next-line: member-ordering
  private empleado: Observable<Empleado>;


  // metodos CRUD para empleado
  getAllEmpleado() {
    this.empleadosCollection = this.afs.collection<Empleado>('empleado');
    return this.empleados = this.empleadosCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Empleado;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }


  // metodo para ver cada empleado
  getOneEmpleado(id: string) {
    this.empleadoDoc = this.afs.doc<Empleado>(`empeado/${id}`);
    return this.empleado = this.empleadoDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Empleado;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  addEmpleado( empleado: Empleado ): void {
   this.empleadosCollection.add(empleado);
  }

  // actualizar el empleado
  actualizarEmpleado( empleado: Empleado ) {
    return this.empleadosCollection.doc(empleado.id).update(empleado);
  }

  // borrar el empleado
  borrarEmpleado( idEmpleaado: string): void {
    this.empleadoDoc = this.afs.doc<Empleado>(`empleado/${idEmpleaado}`);
    this.empleadoDoc.delete();
  }

}
