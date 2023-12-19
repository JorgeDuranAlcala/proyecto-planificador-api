import { Injectable, Logger } from '@nestjs/common';
import { CreateIndicadoreDto } from './dto/create-indicadore.dto';
import { UpdateIndicadoreDto } from './dto/update-indicadore.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Indicadores } from './entities/indicadores.model';

@Injectable()
export class IndicadoresService {
  private readonly logger: Logger = new Logger(IndicadoresService.name);

  constructor(
    @InjectModel(Indicadores)
    private readonly indicadoresModel: typeof Indicadores,
  ) {}
  create(createIndicadoreDto: CreateIndicadoreDto) {
    return 'This action adds a new indicadore';
  }

  findAll() {
    try {
      return this.indicadoresModel.findAll();
    } catch (error) {
      this.logger.error(error);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} indicadore`;
  }

  update(id: number, updateIndicadoreDto: UpdateIndicadoreDto) {
    return `This action updates a #${id} indicadore`;
  }

  remove(id: number) {
    return `This action removes a #${id} indicadore`;
  }
}
