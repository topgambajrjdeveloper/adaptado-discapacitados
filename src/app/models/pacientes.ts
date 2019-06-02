
export interface Pacientes {
  // datos personales
  id?: string;
  fullname?: string;
  dni?: string;
  edad?: string;
  nacimiento?: string;
  domicilio?: string;
  phoneNumber: string;
  photoUrl?: string;
  email?: string;
  bono?: string;
  sexo?: string;
  sesiones?: string;
  fechaAltaPaciente?: any;
  // otros datos
  observaciones?: string;
  operaciones?: string;
  accidentes?: string;
  lesiones?: string;
  colectivo?: string;
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
  otrasOservaciones?: string;
  diaConsulta?: string;
  horaConsulta?: string;
  timestamp?: any;
  userNombre?: string;
  userUid?: string;
}
