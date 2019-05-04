import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../../models/empleado';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public empleado: Empleado;
  constructor() { }

  ngOnInit() {
  }

}
