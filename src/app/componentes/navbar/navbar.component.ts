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
  public userNombre: string;
  public photoUrl: string;
  public userId: string;

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
        this.isLogged = true;
        this.isAdmin = true;
        this.userNombre = auth.displayName;
        this.photoUrl = auth.photoURL;
        this.userId = auth.uid;
      } else {
        this.isLogged = false;
      }
    });
  }



}
