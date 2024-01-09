import { Injectable, Logger } from '@nestjs/common';
import { CreateProcesoDto } from './dto/create-proceso.dto';
import { UpdateProcesoDto } from './dto/update-proceso.dto';
import { Procesos } from './entities/proceso.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ProcesosService {
  private readonly logger: Logger = new Logger(ProcesosService.name);

  constructor(
    @InjectModel(Procesos) private readonly procesosModel: typeof Procesos,
  ) {}

  create(createProcesoDto: CreateProcesoDto) {
    this.logger.log(createProcesoDto);
    return this.procesosModel.create(createProcesoDto);
  }

  findAll() {
    try {
      return this.procesosModel.findAll();
    } catch (error) {
      this.logger.error(error);
    }
  }

  findOne(id: number) {
    return this.procesosModel.findOne({
      where: {
        id_proceso: id,
      },
    });
  }

  update(id: number, updateProcesoDto: UpdateProcesoDto) {
    return this.procesosModel.update(updateProcesoDto, {
      where: {
        id_proceso: id,
      },
    });
  }

  remove(id: number) {
    return this.procesosModel.destroy({
      where: {
        id_proceso: id,
      },
    });
  }
}
