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

  displayedColumns: string[] = ['nombre', 'apellidos', 'diaConsulta', 'horaConsulta', 'acciones' ];
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
    if (element) {
      this.dataApi.selected = element;
    }
  }

  onDelete(id: string) {
    this.dataApi.borrarPaciente(id);
  }

  onSaveForm() {
    if (this.dataApi.selected.id == null) {
      const nuevoPaciente = {
        nombre: this.dataApi.selected.nombre,
        apellidos: this.dataApi.selected.apellidos,
        diaConsulta: this.dataApi.selected.diaConsulta,
        horaConsulta: this.dataApi.selected.horaConsulta
      };
      this.dataApi.addPaciente(this.dataApi.selected);
    } else {
      this.dataApi.actualizarPaciente(this.dataApi.selected);
    }

  }





}
