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
    return 'This action adds a new proceso';
  }

  findAll() {
    try {
      return this.procesosModel.findAll();
    } catch (error) {
      this.logger.error(error);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} proceso`;
  }

  update(id: number, updateProcesoDto: UpdateProcesoDto) {
    return `This action updates a #${id} proceso`;
  }

  remove(id: number) {
    return `This action removes a #${id} proceso`;
  }
}
