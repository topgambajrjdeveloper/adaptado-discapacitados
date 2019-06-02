import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { DataApiService, AuthService } from './../../../services/index.service';
import { MatPaginator, MatTableDataSource, MatSort, MatSortModule } from '@angular/material';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';

// se importan el modelo
import { Pacientes, Empleado } from '../../../models/index.class';


@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css']
})
export class ListaPacienteComponent implements OnInit, AfterViewInit {

  private paciente: Observable<Pacientes[]>;
  private empleado: Empleado[] = [];
  public isAdmin: any = null;
  public userUid: string = null;
  public idPaciente: string;
  public fecha = new Date();


  displayedColumns: string[] = [ 'fullname', 'diaConsulta', 'horaConsulta', 'acciones'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public pacienteI = [];

  constructor( private dataApi: DataApiService,
               private route: ActivatedRoute,
               private authService: AuthService,
               private router: Router) {}


  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
// tslint:disable-next-line: no-string-literal
    this.idPaciente = this.route.snapshot.params['id'];
    this.getAllPaciente();
    this.getCurrentUser();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  // No tocar meto, porque funciona // Metodo para eliminar pacientes
  onDelete(paciente: Pacientes) {
    this.dataApi.borrarPaciente(paciente.id);
    const confirmacion = confirm('¿Estás seguro?');
    if (confirmacion) {
      this.dataApi.borrarPaciente(paciente.id);
    }
  }

// tslint:disable-next-line: no-shadowed-variable
  onView(element) {
    this.dataApi.getOnePaciente(element);
    console.log(element);
    //this.router.navigate(['/paciente/ficha-paciente', element.id]);
  }

  onSubmitPaciente({value}: {value: Pacientes}) {
    value.fechaAltaPaciente = (new Date()).getTime();
    this.authService.isAuth().subscribe( user => {
      value.userUid = user.uid;
      this.dataApi.addPaciente(value);
    });
    this.router.navigate(['/paciente/buscar-paciente']);
  }

  getCurrentUser() {}

  onPreUpdateBook(paciente: Pacientes) {
    console.log('Paciente', paciente);
    this.dataApi.selectedPaciente = Object.assign({}, paciente);
  }

  getAllPaciente() {
    this.dataApi.getAllPaciente().subscribe(pacientes => {
      this.pacienteI = pacientes;
      this.dataSource.data = pacientes;
    });
  }

  getOnePaciente() {
  }
}
