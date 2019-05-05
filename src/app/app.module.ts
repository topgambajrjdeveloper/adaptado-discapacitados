import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from './../environments/environment';


import { ServiciosModule } from './services/servicios/servicios.module';
import { AppRoutingModule } from './app-routing.module';
import { AngularModule } from './material/angular/angular.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent, FooterComponent, ErrorComponent, ConfiguracionComponent,
  ProfileComponent, CalendarioComponent, NuevoEmpleadoComponent, EmpleadoComponent,
  NuevoPacienteComponent, ListaPacienteComponent, FichaPacienteComponent, InfoPacienteTablaComponent,
  AccederComponent, RecuperarComponent, RegistroComponent, UserStatusComponent } from './componentes/index.paginas';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    AccederComponent,
    RecuperarComponent,
    ConfiguracionComponent,
    ErrorComponent,
    NavbarComponent,
    FooterComponent,
    EmpleadoComponent,
    CalendarioComponent,
    NuevoEmpleadoComponent,
    ProfileComponent,
    FichaPacienteComponent,
    ListaPacienteComponent,
    NuevoPacienteComponent,
    UserStatusComponent,
    InfoPacienteTablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularModule
  ],
  providers: [ServiciosModule],
  bootstrap: [AppComponent]

})
export class AppModule { }
