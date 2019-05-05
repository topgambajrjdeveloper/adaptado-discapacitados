export interface Roles {
  trabajador?: boolean;
  admin?: boolean;
}

export interface Empleado {
  id?: string;
  email?: string;
  password?: string;
  photoUrl?: string;
  nombre?: string;
  apellidos?: string;
  phoneNumber?: string;
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
