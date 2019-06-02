import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es');
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from './../environments/environment';

import { HttpClientModule } from '@angular/common/http';
import { ServiciosModule } from './services/servicios/servicios.module';
import { AppRoutingModule } from './app-routing.module';

import { AngularModule } from './material/angular/angular.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { ConfiguracionComponent, ErrorComponent, FooterComponent,
  NavbarComponent, RecuperarComponent, AccederComponent,
  RegistroComponent, NotPermissionComponent, MigaspanComponent,
  CalendarioComponent, ProfileComponent, NuevoEmpleadoComponent,
  EmpleadoComponent, UserStatusComponent, PhotoUrlComponent,
  FichaPacienteComponent, NuevoPacienteComponent, ListaPacienteComponent,
  FormComponent, MensajesComponent } from './componentes/index.paginas';
import { ImagePipe } from './pipes/image.pipe';
import { EditProfileComponent } from './componentes/privado/edit-profile/edit-profile.component';
import { ModalComponent } from './componentes/privado/calendario/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfiguracionComponent,
    ErrorComponent,
    FooterComponent,
    NavbarComponent,
    RecuperarComponent,
    AccederComponent,
    RegistroComponent,
    NotPermissionComponent,
    MigaspanComponent,
    CalendarioComponent,
    ProfileComponent,
    NuevoEmpleadoComponent,
    EmpleadoComponent,
    UserStatusComponent,
    PhotoUrlComponent,
    FichaPacienteComponent,
    NuevoPacienteComponent,
    ListaPacienteComponent,
    FormComponent,
    MensajesComponent,
    ImagePipe,
    EditProfileComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
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
  providers: [{ provide: LOCALE_ID, useValue: 'es' },
    ServiciosModule
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
