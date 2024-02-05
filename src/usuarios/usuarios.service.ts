import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Usuarios } from './entities/usuario.model';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuarios) private readonly usuariosModel: typeof Usuarios,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const user = await this.usuariosModel.findOne({
      where: { cedula: createUsuarioDto.cedula },
    });
    if (user) {
      throw new Error('Usuario ya existe');
    }
    return this.usuariosModel.create(createUsuarioDto);
  }

  findAll() {
    return this.usuariosModel.findAll();
  }

  findOne(id: number) {
    return this.usuariosModel.findOne({ where: { id_usuario: id } });
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosModel.update(updateUsuarioDto, {
      where: { id_usuario: id },
    });
  }

  remove(id: number) {
    return this.usuariosModel.destroy({ where: { id_usuario: id } });
  }
}
