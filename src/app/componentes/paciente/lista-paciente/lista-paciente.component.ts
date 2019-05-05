import { Component, OnInit } from '@angular/core';
import { DataApiService } from './../../../services/data-api.service';
import { AngularFirestore, AngularFirestoreDocument,  } from '@angular/fire/firestore';


import { Pacientes } from './../../../models/pacientes';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css']
})
export class ListaPacienteComponent implements OnInit {


  private pacienteDoc: AngularFirestoreDocument<Pacientes>;
  public pacientes: Observable<any[]>;
  public paciente = '';

  constructor(private afs: AngularFirestore, private dataApi: DataApiService) {
    this.pacientes = afs.collection('pacientes').valueChanges();
  }

  ngOnInit(): void {

  }

}
