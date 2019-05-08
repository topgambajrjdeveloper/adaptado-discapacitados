import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {

  public email: '';
  private alert;

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
  }

  // registro de usuarios con firebase
  recoveryEmpleado(email: string) {}

}
