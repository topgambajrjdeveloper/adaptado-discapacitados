export interface Roles {
  admin?: boolean;
  recepcionista?: string;
  trabajador?: boolean;
}

export interface Empleado {
  id?: string;
  email?: string;
  password?: string;
  photoUrl?: string;
  nombre?: string;
  apellidos?: string;
  phoneNumber?: string;
  numeroEmpleado?: string;
  tipoEspecialista?: string;
  domicilio?: string;
  edad?: any;
  discapacidad?: string;
  dni?: string;
  displayName?: string;
  providerId?: string;
  status?: string;
  timestamp?: string;
  roles: Roles;
}
