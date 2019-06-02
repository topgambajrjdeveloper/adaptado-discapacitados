import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
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


  // Pacientes
  private pacientesCollection: AngularFirestoreCollection<Pacientes>;
  private pacientes: Observable<Pacientes[]>;
  private pacienteDoc: AngularFirestoreDocument<Pacientes>;
  private paciente: Observable<Pacientes>;
  public selectedPaciente: Pacientes = {
    id: null,
    fullname: '',
    dni: '',
    edad: '',
    nacimiento: '',
    domicilio: '',
    phoneNumber: '',
    photoUrl: '',
    email: '',
    bono: '',
    sexo: '',
    sesiones: '',
    fechaAltaPaciente: '',
    // otros datos
    observaciones: '',
    operaciones: '',
    accidentes: '',
    lesiones: '',
    colectivo: '',
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
    timestamp: '',
    userNombre: '',
    userUid: ''
  };
  // Empleado
  private empleadosCollection: AngularFirestoreCollection<Empleado>;
  private empleados: Observable<Empleado[]>;
  private empleadoDoc: AngularFirestoreDocument<Empleado>;
  private empleado: Observable<Empleado>;
  public selectedEmpleado: Empleado = {
    id: '',
    userUid: '',
    email: '',
    password: '',
    photoUrl: '',
    nombre: '',
    apellidos: '',
    userNombre: '',
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
    timestamp: '',
    fechaIncorporacion: '',
    userId: '',
    userName: '',
    roles: null
    };


  constructor( private afs: AngularFirestore ) {}


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
  getOnePaciente(idPaciente: string) {
    this.pacienteDoc = this.afs.doc<Pacientes>(`paciente/${idPaciente}`);
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
  actualizarPaciente( paciente: Pacientes): void {
    // tslint:disable-next-line: prefer-const
    let idPaciente = paciente.id;
    this.pacienteDoc = this.afs.doc<Pacientes>(`paciente/${idPaciente}`);
    this.pacienteDoc.update(paciente);
  }

  // borrar el paciente
  borrarPaciente(idPaciente: string): void {
    this.pacienteDoc = this.afs.doc<Pacientes>(`paciente/${idPaciente}`);
    this.pacienteDoc.delete();
  }

/*-------------------------------------------------------------------------------------------*/

  // metodos CRUD para empleado
  getAllEmpleado() {
    this.empleadosCollection = this.afs.collection<Empleado>('emplados');
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
  getOneEmpleado(idEmpleado: string) {
    this.empleadoDoc = this.afs.doc<Empleado>(`empleado/${idEmpleado}`);
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

  addEmpleado(empleado: Empleado): void {
    this.empleadosCollection.add(empleado);
  }

  // actualizar el empleado
  actualizarEmpleado( empleado: Empleado ): void {
  // tslint:disable-next-line: prefer-const
    let idEmpleado = empleado.id;
    this.empleadoDoc = this.afs.doc<Empleado>(`empleado/${idEmpleado}`);
    this.empleadoDoc.update(empleado);
  }

  // borrar el empleado
  borrarEmpleado( empleado: Empleado): void {
    this.empleadoDoc = this.afs.doc(`empleado/${empleado.id}`);
    this.empleadoDoc.delete();
  }

}
