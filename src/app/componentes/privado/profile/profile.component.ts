import { Component, OnInit } from '@angular/core';
import { Empleado} from '../../../models/empleado';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService) { }
  empleado: Empleado = {
    email: '',
    password: '',
    photoUrl: '',
    nombre: '',
    apellidos: '',
    phoneNumber: '',
    domicilio: '',
    edad: '',
    discapacidad: '',
    dni: '',
    displayName: '',
    providerId: '',
    roles: {}
  };
  public providerId = 'null';

  ngOnInit() {
    this.authService.isAuth().subscribe(empleado => {
      if (empleado) {
        this.empleado.nombre = empleado.displayName;
        this.empleado.email = empleado.email;
        this.empleado.photoUrl = empleado.photoURL;
        this.providerId = empleado.providerData[0].providerId;
      }
    });
  }

}
