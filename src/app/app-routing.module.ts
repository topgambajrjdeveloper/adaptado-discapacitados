import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent, ConfiguracionComponent,
  ProfileComponent, CalendarioComponent, NuevoEmpleadoComponent, EmpleadoComponent, NotPermissionComponent,
  NuevoPacienteComponent, ListaPacienteComponent, FichaPacienteComponent, AccederComponent,
  RecuperarComponent, RegistroComponent, MensajesComponent, EditProfileComponent } from './componentes/index.paginas';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'registro', component: RegistroComponent, data: { titulo: 'Registro' } },
  { path: 'acceder', component: AccederComponent, data: { titulo: 'Acceso'}},
  { path: 'recuperar-cuenta', component: RecuperarComponent, data: { titulo: 'Recuperar Cuenta'}},
  { path: 'privado/citas', component: CalendarioComponent, data: { titulo: 'Calendario'}},
  { path: 'privado/mi-perfil', component: ProfileComponent, canActivate: [AuthGuard] , data: { titulo: 'Mí Perfíl'}},
  { path: 'privado/editar-perfil/:id', component: EditProfileComponent, canActivate: [AuthGuard] , data: { titulo: 'Editar Perfíl'}},
  { path: 'privado/empleado', component: EmpleadoComponent, canActivate: [AuthGuard] , data: { titulo: 'Empleado'}},
  { path: 'privado/empleado/:id', component: EmpleadoComponent, canActivate: [AuthGuard] , data: { titulo: 'Empleado'}},
  { path: 'privado/nuevo-empleado', component: NuevoEmpleadoComponent, canActivate: [AuthGuard] , data: { titulo: 'Nuevo Empleado'}},
  { path: 'paciente/ficha-paciente/:id', component: FichaPacienteComponent, canActivate: [AuthGuard] , data: { titulo: 'Ficha Paciente'}},
  { path: 'paciente/buscar-paciente', component: ListaPacienteComponent, canActivate: [AuthGuard] , data: { titulo: 'Buscador de Pacientes'}},
  { path: 'paciente/editar-paciente', component: NuevoPacienteComponent, canActivate: [AuthGuard] , data: { titulo: 'Editar Paciente'}},
  { path: 'configuracion', component: ConfiguracionComponent , data: { titulo: 'Configuaración'}},
  { path: 'mensajeria', component: MensajesComponent, canActivate: [AuthGuard] , data: { titulo: 'Mensajería'}},
  { path: 'sin-permiso', component: NotPermissionComponent , data: { titulo: 'Sin Permiso'}},
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
