import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ImagePipe } from '../../pipes/image.pipe';
import { Empleado } from '../../models/index.class';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

// tslint:disable-next-line: no-inferrable-types
  public isLogged: boolean = false;
// tslint:disable-next-line: no-inferrable-types
  public isAdmin: boolean = false;
  public userNombre: string;
  public photoUrl: string;
  public userId: string;
  public empleado: Empleado;

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
