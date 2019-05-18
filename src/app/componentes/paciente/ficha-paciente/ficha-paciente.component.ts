import { Component, OnInit } from '@angular/core';
import { DataApiService } from './../../../services/data-api.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-ficha-paciente',
  templateUrl: './ficha-paciente.component.html',
  styleUrls: ['./ficha-paciente.component.css']
})
export class FichaPacienteComponent implements OnInit {

  idPaciente: string;

  constructor(private dataApi: DataApiService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  // tslint:disable-next-line: no-string-literal
  this.idPaciente = this.route.snapshot.params['id'];
  }

}
