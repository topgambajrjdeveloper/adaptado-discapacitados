import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent, ConfiguracionComponent,
  ProfileComponent, CalendarioComponent, NuevoEmpleadoComponent, EmpleadoComponent, NotPermissionComponent,
  NuevoPacienteComponent, ListaPacienteComponent, FichaPacienteComponent, AccederComponent,
  RecuperarComponent, RegistroComponent } from './componentes/index.paginas';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'registro', component: RegistroComponent},
  { path: 'acceder', component: AccederComponent},
  { path: 'recuperar-cuenta', component: RecuperarComponent},
  { path: 'privado/citas', component: CalendarioComponent},
  { path: 'privado/mi-perfil', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'privado/empleado', component: EmpleadoComponent, canActivate: [AuthGuard] },
  { path: 'privado/empleado/:id', component: EmpleadoComponent, canActivate: [AuthGuard] },
  { path: 'privado/nuevo-empleado', component: NuevoEmpleadoComponent, canActivate: [AuthGuard] },
  { path: 'paciente/ficha-paciente', component: FichaPacienteComponent, canActivate: [AuthGuard] },
  { path: 'paciente/ficha-paciente/:id', component: FichaPacienteComponent, canActivate: [AuthGuard] },
  { path: 'paciente/buscar-paciente', component: ListaPacienteComponent, canActivate: [AuthGuard] },
  { path: 'paciente/nuevo-paciente', component: NuevoPacienteComponent, canActivate: [AuthGuard] },
  { path: 'configuracion', component: ConfiguracionComponent },
  { path: 'sin-permiso', component: NotPermissionComponent },
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
