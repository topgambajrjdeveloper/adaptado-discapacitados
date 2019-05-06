import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { DataApiService } from './../../../services/data-api.service';
import { MatPaginator, MatTableDataSource, MatSort, MatSortModule } from '@angular/material';
import { Observable } from 'rxjs';

// se importan el modelo
import { Pacientes } from '../../../models/pacientes';


@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css']
})
export class ListaPacienteComponent implements OnInit, AfterViewInit {

  pacientes: Observable<Pacientes[]>;

  displayedColumns: string[] = ['photoUrl', 'nombre', 'dni', 'phoneNumber', 'acciones'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public pacienteI = [];
  public paciente = '';

  constructor( private dataApi: DataApiService) {

  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataApi.getAllPaciente().subscribe(pacientes => {
      console.log('PACIENTES', pacientes);
      this.pacienteI = pacientes;
      this.dataSource.data = pacientes;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEdit(element: any) {
    console.log('Editar', element);
  }

  onDelete(id: string) {
    console.log('Elimiar', id);
    this.dataApi.borrarPaciente(id);
  }

}
