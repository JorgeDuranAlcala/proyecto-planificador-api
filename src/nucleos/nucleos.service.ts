import { Injectable, Logger } from '@nestjs/common';
import { CreateNucleoDto } from './dto/create-nucleo.dto';
import { UpdateNucleoDto } from './dto/update-nucleo.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Nucleos } from './entities/nucleo.model';

@Injectable()
export class NucleosService {
  private readonly logger: Logger = new Logger(NucleosService.name);

  constructor(
    @InjectModel(Nucleos) private readonly nucleosModel: typeof Nucleos,
  ) {}

  create(createNucleoDto: CreateNucleoDto) {
    try {
      return this.nucleosModel.create(createNucleoDto);
    } catch (error) {
      this.logger.error(error.message);
    }
  }

  findAll() {
    try {
      return this.nucleosModel.findAll();
    } catch (error) {
      this.logger.error(error);
    }
  }

  findOne(id: number) {
    return this.nucleosModel.findOne({
      where: {
        id_nucleo: id,
      },
    });
  }

  update(id: number, updateNucleoDto: UpdateNucleoDto) {
    return this.nucleosModel.update(updateNucleoDto, {
      where: {
        id_nucleo: id,
      },
    });
  }

  remove(id: number) {
    return this.nucleosModel.destroy({
      where: {
        id_nucleo: id,
      },
    });
  }
}
