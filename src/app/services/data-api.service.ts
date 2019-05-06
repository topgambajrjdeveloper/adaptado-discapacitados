import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// se importan el modelo
import { Pacientes } from '../models/pacientes';
export interface PacientesId extends Pacientes { id: string; }

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

public selected = {
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
  diaConsulta: ''
};

  constructor( private afs: AngularFirestore) {
    this.pacientesCollection = afs.collection<Pacientes>('paciente');
    this.pacientes = this.pacientesCollection.valueChanges();
  }
  private pacientesCollection: AngularFirestoreCollection<Pacientes>;
  private pacientes: Observable<Pacientes[]>;
  private pacienteDoc: AngularFirestoreDocument<Pacientes>;
  private paciente: Observable<Pacientes>;

  // se crear la conexion para EMPLEADO firestore


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
    this.pacienteDoc = this.afs.doc<Pacientes>(`paciente/${id}`);
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
    const idPaciente = '';
    this.pacienteDoc = this.afs.doc<Pacientes>(`paciente/${idPaciente}`);
    this.pacienteDoc.update(paciente);
  }

  // borrar el paciente
  borrarPaciente( idPaciente: string): void {
    this.pacienteDoc = this.afs.doc<Pacientes>(`paciente/${idPaciente}`);
    this.pacienteDoc.delete();
  }

}
