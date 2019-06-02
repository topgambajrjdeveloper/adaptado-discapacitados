import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { Empleado } from '../../../models/index.class';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  @ViewChild('btnClose') btnClose: ElementRef;
  @Input() userUid: string;
  idEmpleado: string;

  constructor(private dataApi: DataApiService) { }

  ngOnInit() {
  }

  onSaveProfile(formEmpleado: NgForm): void {
    if (formEmpleado.value.id == null) {
      // New
      formEmpleado.value.userUid = this.userUid;
      this.dataApi.addEmpleado(formEmpleado.value);
    } else {
      // Update
      this.dataApi.actualizarEmpleado(formEmpleado.value);
    }
    formEmpleado.resetForm();
    this.btnClose.nativeElement.click();
  }

}
