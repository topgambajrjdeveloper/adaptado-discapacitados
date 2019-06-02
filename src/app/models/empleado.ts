export interface Roles {
  admin?: boolean;
  recepcionista?: string;
  trabajador?: boolean;
}

export interface Empleado {
  id?: string;
  userUid?: string;
  email?: string;
  password?: string;
  photoUrl?: string;
  nombre?: string;
  apellidos?: string;
  userNombre?: string;
  phoneNumber?: string;
  numeroEmpleado?: string;
  tipoEspecialista?: string;
  domicilio?: string;
  edad?: string;
  discapacidad?: string;
  porcentaje?: string;
  dni?: string;
  bio?: string;
  providerId?: string;
  status?: string;
  timestamp?: any;
  fechaIncorporacion?: any;
  userId?: string;
  userName?: string;
  roles: Roles;
  
}
