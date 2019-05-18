import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { DataApiService } from './../../../services/data-api.service';
import { MatPaginator, MatTableDataSource, MatSort, MatSortModule } from '@angular/material';
import { Observable } from 'rxjs';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit, AfterViewInit {

  empleados: Observable<Empleado[]>;

  displayedColumns: string[] = ['nombre', 'apellidos', 'acciones'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public empleadoI = [];
  public empleado = '';

  constructor( private dataApi: DataApiService) {

  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataApi.getAllEmpleado().subscribe(empleados => {
      this.empleadoI = empleados;
      this.dataSource.data = empleados;
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
      this.dataApi.selectedEmpleado = element;
    }
  }

  onDelete(id: string) {
    this.dataApi.borrarEmpleado(id);
  }

  onSaveForm() {
    if (this.dataApi.selectedEmpleado.id == null) {
      const nuevoempleado = {
        nombre: this.dataApi.selectedEmpleado.nombre,
        apellidos: this.dataApi.selectedEmpleado.apellidos
      };
      this.dataApi.addEmpleado(this.dataApi.selectedEmpleado.id);
    } else {
      this.dataApi.actualizarEmpleado(this.dataApi.selectedEmpleado.id);
    }

  }
}
