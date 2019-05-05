import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLogged: boolean = false;
  public isAdmin: boolean = false;

  constructor( private afAuth: AngularFireAuth,
               private authService: AuthService,
               private router: Router) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  // cerrar sesión
  onLogout() {
    this.authService.cerrarSesion();
    this.router.navigate(['/acceder']);
  }

  // comprobamos si el empleado se ha logueado
  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        console.log('user logged');
        this.isLogged = true;
      } else {
        console.log('NOT user logged');
        this.isLogged = false;
      }
    });
  }



}
