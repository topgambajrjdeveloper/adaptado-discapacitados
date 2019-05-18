import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

import { DataApiService } from '../../../services/data-api.service';
import { Empleado } from '../../../models/empleado';

export interface Roles {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-nuevo-empleado',
  templateUrl: './nuevo-empleado.component.html',
  styleUrls: ['./nuevo-empleado.component.css']
})
export class NuevoEmpleadoComponent implements OnInit {

  rol: Roles[] = [
    {value: 'recepcionista', viewValue: 'Recepcionista'},
    {value: 'trabajador', viewValue: 'Trabajador'}];


  constructor(private fb: FormBuilder,
              public dialog: MatDialog,
              private router: Router, private dataApi: DataApiService) { }

  ngOnInit() {}

  newEmpleado() {

  }

}
