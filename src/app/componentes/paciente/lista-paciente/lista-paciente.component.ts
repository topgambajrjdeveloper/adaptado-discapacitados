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
  {uid: 1, nombre: 'Hydrogen', bono: 1.0079, sesiones: 'H'},
  {uid: 2, nombre: 'Helium', bono: 4.0026, sesiones: 'He'},
  {uid: 3, nombre: 'Lithium', bono: 6.941, sesiones: 'Li'},
  {uid: 4, nombre: 'Beryllium', bono: 9.0122, sesiones: 'Be'},
  {uid: 5, nombre: 'Boron', bono: 10.811, sesiones: 'B'},
  {uid: 6, nombre: 'Carbon', bono: 12.0107, sesiones: 'C'},
  {uid: 7, nombre: 'Nitrogen', bono: 14.0067, sesiones: 'N'},
  {uid: 8, nombre: 'Oxygen', bono: 15.9994, sesiones: 'O'},
  {uid: 9, nombre: 'Fluorine', bono: 18.9984, sesiones: 'F'},
  {uid: 10, nombre: 'Neon', bono: 20.1797, sesiones: 'Ne'},
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
