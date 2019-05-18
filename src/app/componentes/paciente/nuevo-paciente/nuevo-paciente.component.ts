import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { DataApiService } from './../../../services/data-api.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

/** Error cuando el control no válido está sucio, tocado o enviado. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
/** Control para el bono */
export interface Bono {
  value: string;
  viewValue: string;
}

export interface Sesion {
  value: string;
  viewValue: string;
}

export interface Sexo {
  value: string;
  viewValue: string;
}

export interface Deporte {
  value: string;
  viewValue: string;
}

export interface Trabaja {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-nuevo-paciente',
  templateUrl: './nuevo-paciente.component.html',
  styleUrls: ['./nuevo-paciente.component.css']
})
export class NuevoPacienteComponent implements OnInit {
  idPaciente: string;

  bonos: Bono[] = [
    {value: 'individual', viewValue: 'Individual'},
    {value: 'discapacitado', viewValue: 'Discapacitado'},
    {value: 'privado', viewValue: 'Seguro Prvado'}
  ];

  sesiones: Sesion[] = [
    {value: 'individual', viewValue: 'Individual'},
    {value: 'discapacitado', viewValue: 'Discapacitado'},
    {value: 'privado', viewValue: 'Seguro Prvado'}
  ];

  sexo: Sexo[] = [
    {value: 'hombre', viewValue: 'Hombre'},
    {value: 'mujer', viewValue: 'Mujer'}
  ];

  deporte: Deporte[] = [
    {value: 'si', viewValue: 'Si'},
    {value: 'no', viewValue: 'No'}
  ];

  trabaja: Trabaja[] = [
    {value: 'si', viewValue: 'Si'},
    {value: 'no', viewValue: 'No'}
  ];

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor( private dataApi: DataApiService,
               private route: ActivatedRoute,
               private router: Router ) { }

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.idPaciente = this.route.snapshot.params['id'];
  }

}
