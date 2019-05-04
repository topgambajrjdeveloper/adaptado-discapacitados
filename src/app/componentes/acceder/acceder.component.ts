import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthService } from '../../services/auth.service';

import { Router } from '@angular/router';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-acceder',
  templateUrl: './acceder.component.html',
  styleUrls: ['./acceder.component.css']
})
export class AccederComponent implements OnInit {

  public email: '';
  public password: '';
  public empleado: Empleado;


  constructor( private authService: AuthService,
               public afsAuth: AngularFireAuth,
               private router: Router ) { }

  ngOnInit() {
  }

  // acceso de empleados
  onLoginEmpleados(): void {
    this.authService.accesoEmpleados(this.email, this.password)
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }

  onLogout() {
    this.authService.cerrarSesion();
    this.router.navigate(['acceder']);
  }

  onLoginRedirect(): void {
    this.router.navigate(['privado/citas']);
  }






}
