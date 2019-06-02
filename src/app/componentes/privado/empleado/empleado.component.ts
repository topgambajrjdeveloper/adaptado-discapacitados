import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { DataApiService, AuthService } from './../../../services/index.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Empleado } from '../../../models/index.class';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor( private dataApi: DataApiService,
               private authService: AuthService,
               private router: Router) {}
  // tslint:disable-next-line: no-inferrable-types
  public isAdmin: boolean  = false;
  public userUid: string = null;
  public empleado: Empleado;

  ngOnInit() {
    this.getTodosEmpleado();
    this.getCurrentUser();
  }

  getCurrentUser() {

  }

  getTodosEmpleado() {
    this.dataApi.getAllEmpleado().subscribe( empleado => this.empleado);
  }


  onDelete(id: any) {
    const confirmacion = confirm('Are you sure?');
    if (confirmacion) {
      this.dataApi.borrarEmpleado(id);
    }
    this.router.navigate(['privado/empleado']);
  }

  onEdit(empleado: Empleado) {
    // this.dataApi.actualizarEmpleado(empleado);
    console.log(empleado);
    this.router.navigate(['/privado/edit-profile/', empleado]);
  }

  onSaveForm() {}

}
