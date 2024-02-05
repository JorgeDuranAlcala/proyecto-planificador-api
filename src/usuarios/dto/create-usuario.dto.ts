export class CreateUsuarioDto {
  cedula: string;
  nombre: string;
  apellido: string;
  password: string;
}

export class LoginUsuarioDto {
  cedula: string;
  password: string;
}
