import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresenceService } from '../presence.service';
import { DataApiService } from '../data-api.service';
import { AuthService } from '../auth.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthService,
    DataApiService,
    PresenceService
  ],
  exports: [
    AuthService,
    DataApiService,
    PresenceService
  ]
})
export class ServiciosModule { }
