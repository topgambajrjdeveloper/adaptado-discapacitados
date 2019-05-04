import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from './../environments/environment';
import { FormsModule } from '@angular/forms';

import { ServiciosModule } from './services/servicios/servicios.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent, FooterComponent, ErrorComponent, ConfiguracionComponent,
  ProfileComponent, CalendarioComponent, NuevoEmpleadoComponent, EmpleadoComponent,
  NuevoPacienteComponent, ListaPacienteComponent, FichaPacienteComponent,
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
    UserStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,

  ],
  providers: [ServiciosModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
