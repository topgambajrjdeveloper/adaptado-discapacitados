import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { DataApiService } from './../../../services/data-api.service';
import { MatPaginator, MatTableDataSource, MatSort, MatSortModule } from '@angular/material';
import { Observable } from 'rxjs';

import { Router, ActivatedRoute, Params } from '@angular/router';



// se importan el modelo
import { Pacientes } from '../../../models/pacientes';


@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css']
})
export class ListaPacienteComponent implements OnInit, AfterViewInit {

  pacientes: Observable<Pacientes[]>;
  idPaciente: string;

  displayedColumns: string[] = ['nombre', 'apellidos', 'diaConsulta', 'horaConsulta', 'acciones'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public pacienteI = [];
  public paciente = '';

  constructor( private dataApi: DataApiService,
               private route: ActivatedRoute,
               private router: Router) {

  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.idPaciente = this.route.snapshot.params[' id '];
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
      this.dataApi.selectedPaciente = element;
    }
  }

  onDelete(id: string) {
    this.dataApi.borrarPaciente(id);
  }

  onView(id: string) {
    this.dataApi.getOnePaciente(id);
    //this.router.navigate();
  }

  onSaveForm() {
    if (this.dataApi.selectedPaciente.id == null) {
      const nuevoPaciente = {
        nombre: this.dataApi.selectedPaciente.nombre,
        apellidos: this.dataApi.selectedPaciente.apellidos,
        diaConsulta: this.dataApi.selectedPaciente.diaConsulta,
        horaConsulta: this.dataApi.selectedPaciente.horaConsulta
      };
      this.dataApi.addPaciente(this.dataApi.selectedPaciente.id);
    } else {
      this.dataApi.actualizarPaciente(this.dataApi.selectedPaciente.id);
    }

  }





}
