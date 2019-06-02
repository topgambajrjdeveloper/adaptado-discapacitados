import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresenceService } from '../presence.service';
import { DataApiService } from '../data-api.service';
import { AuthService } from '../auth.service';
import { CalendarFirebaseService } from '../calendar-firebase.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthService,
    DataApiService,
    PresenceService,
    CalendarFirebaseService
  ],
  exports: [
    AuthService,
    DataApiService,
    PresenceService,
    CalendarFirebaseService
  ]
})
export class ServiciosModule { }
