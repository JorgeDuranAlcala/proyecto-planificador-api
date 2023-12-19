import { Injectable, Logger } from '@nestjs/common';
import { CreateRegioneDto } from './dto/create-regione.dto';
import { UpdateRegioneDto } from './dto/update-regione.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Regiones } from './entities/region.model';

@Injectable()
export class RegionesService {
  private readonly logger: Logger = new Logger(RegionesService.name);

  constructor(
    @InjectModel(Regiones) private readonly regionesModel: typeof Regiones,
  ) {}

  create(createRegioneDto: CreateRegioneDto) {
    try {
      return this.create(createRegioneDto);
    } catch (error) {
      this.logger.error(error);
    }
  }

  findAll() {
    try {
      return this.regionesModel.findAll();
    } catch (error) {
      this.logger.error(error);
    }
  }

  findOne(id: number) {
    try {
      return this.regionesModel.findOne({ where: { id_region: id } });
    } catch (error) {
      this.logger.error(error);
    }
  }

  update(id: number, updateRegioneDto: UpdateRegioneDto) {
    try {
      return this.regionesModel.update(updateRegioneDto, {
        where: { id_region: id },
      });
    } catch (error) {
      this.logger.error(error);
    }
  }

  remove(id: number) {
    try {
      return this.regionesModel.destroy({ where: { id_region: id } });
    } catch (error) {
      this.logger.error(error);
    }
  }
}
