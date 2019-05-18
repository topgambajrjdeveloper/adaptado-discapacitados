export interface Bonos {
  individual?: boolean;
  discapacitado?: string;
  privado?: boolean;
}

export interface Pacientes {
  id?: string;
  nombre?: string;
  apellidos?: string;
  dni?: string;
  edad?: string;
  nacimiento?: string;
  domicilio?: string;
  phoneNumber: string;
  photoUrl?: string;
  email?: string;
  bono: Bonos;
  sesiones?: string;
  observaciones?: string;
  operaciones?: string;
  accidentes?: string;
  lesiones?: string;
  sexo?: string;
  embarazosCesarias?: string;
  diagnosticos?: string;
  problemasViscerales?: string;
  enfermedades?: string;
  alergias?: string;
  medicaciones?: string;
  tratamientos?: string;
  antecedentesFamiliares?: string;
  frecuenciaFisioOste?: string;
  deporte?: string;
  trabaja?: string;
  relacionesHallazgos?: string;
  otrasObservaciones?: string;
  diaConsulta?: string;
  horaConsulta?: string;
  userUid?: string;
}
