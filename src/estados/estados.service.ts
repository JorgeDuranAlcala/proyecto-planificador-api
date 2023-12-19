import { Injectable, Logger } from '@nestjs/common';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { Estados } from './entities/estado.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class EstadosService {
  private readonly logger: Logger = new Logger(EstadosService.name);

  constructor(
    @InjectModel(Estados) private readonly estadosModel: typeof Estados,
  ) {}

  create(createEstadoDto: CreateEstadoDto) {
    try {
      return this.estadosModel.create(createEstadoDto);
    } catch (error) {
      this.logger.error(error);
    }
  }

  findAll() {
    try {
      return this.estadosModel.findAll();
    } catch (error) {
      this.logger.error(error);
    }
  }

  findOne(id: number) {
    try {
      return this.estadosModel.findOne({ where: { id } });
    } catch (error) {
      this.logger.error(error);
    }
  }

  update(id: number, updateEstadoDto: UpdateEstadoDto) {
    try {
      return this.estadosModel.update(updateEstadoDto, { where: { id } });
    } catch (error) {
      this.logger.error(error);
    }
  }

  remove(id: number) {
    try {
      return this.estadosModel.destroy({ where: { id } });
    } catch (error) {
      this.logger.error(error);
    }
  }
}
