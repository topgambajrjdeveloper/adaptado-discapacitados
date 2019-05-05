import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresenceService } from '../presence.service';
import { FirebaseStorageService } from '../firebase-storage.service';
import { DataApiService } from '../data-api.service';
import { AuthService } from '../auth.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthService,
    DataApiService,
    FirebaseStorageService,
    PresenceService
  ],
  exports: [
    AuthService,
    DataApiService,
    FirebaseStorageService,
    PresenceService
  ]
})
export class ServiciosModule { }
