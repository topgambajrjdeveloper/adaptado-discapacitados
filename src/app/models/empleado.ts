export interface Roles {
  editor?: boolean;
  admin?: boolean;
}

export interface Empleado {
  uid?: string;
  email?: string;
  password?: string;
  photoUrl?: string;
  nombre?: string;
  apellidos?: string;
  telefono?: string;
  domicilio?: string;
  edad?: any;
  discapacidad?: string;
  dni?: string;
  displayName?: string;
  roles: Roles;
}
