import { Component, OnInit } from '@angular/core';
import { DataApiService } from './../../../services/data-api.service';
import { AngularFirestore, AngularFirestoreDocument,  } from '@angular/fire/firestore';
import { MatTableDataSource } from '@angular/material';

import { Pacientes } from './../../../models/pacientes';
import { Observable } from 'rxjs';

export interface Pacientes {
  nombre: string;
  uid: number;
  bono: number;
  sesiones: string;
}

const ELEMENT_DATA: Pacientes[] = [
  {uid: 1, nombre: 'Hydrogen', bono: 1, sesiones: 'Si'},
  {uid: 2, nombre: 'Helium', bono: 4, sesiones: 'Si'},
  {uid: 3, nombre: 'Lithium', bono: 6, sesiones: 'No'},
  {uid: 4, nombre: 'Beryllium', bono: 9, sesiones: 'Be'},
  {uid: 5, nombre: 'Boron', bono: 10, sesiones: 'B'},
  {uid: 6, nombre: 'Carbon', bono: 12, sesiones: 'C'},
  {uid: 7, nombre: 'Nitrogen', bono: 14, sesiones: 'N'},
  {uid: 8, nombre: 'Oxygen', bono: 15, sesiones: 'O'},
  {uid: 9, nombre: 'Fluorine', bono: 18, sesiones: 'F'},
  {uid: 10, nombre: 'Neon', bono: 20, sesiones: 'Ne'},
];

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css']
})
export class ListaPacienteComponent implements OnInit {
  displayedColumns: string[] = ['uid', 'nombre', 'bono', 'sesiones'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  constructor(private afs: AngularFirestore, private dataApi: DataApiService) {

  }

  ngOnInit(): void {

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
