import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {Empleado} from '../../models/index.class';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {

  passReset: boolean = false;
  private alert;
  empleado: Empleado;

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
  }


}
