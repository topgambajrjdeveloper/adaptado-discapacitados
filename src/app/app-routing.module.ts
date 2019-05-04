import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent, ConfiguracionComponent,
  ProfileComponent, CalendarioComponent, NuevoEmpleadoComponent, EmpleadoComponent,
  NuevoPacienteComponent, ListaPacienteComponent, FichaPacienteComponent, AccederComponent,
  RecuperarComponent, RegistroComponent } from './componentes/index.paginas';

const routes: Routes = [
  { path: 'registro', component: RegistroComponent},
  { path: 'acceder', component: AccederComponent},
  { path: 'recuperar-cuenta', component: RecuperarComponent},
  { path: 'privado/citas', component: CalendarioComponent},
  { path: 'privado/mi-perfil', component: ProfileComponent },
  { path: 'privado/empleado', component: EmpleadoComponent },
  { path: 'privado/empleado:/nombre', component: EmpleadoComponent },
  { path: 'privado/nuevo-empleado', component: NuevoEmpleadoComponent },
  { path: 'paciente/ficha-paciente', component: FichaPacienteComponent },
  { path: 'paciente/ficha-paciente:/apellido', component: FichaPacienteComponent },
  { path: 'paciente/lista-paciente:/apellido', component: ListaPacienteComponent },
  { path: 'paciente/nuevo-paciente', component: NuevoPacienteComponent },
  { path: 'configuracion', component: ConfiguracionComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes, {useHash: true } )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
