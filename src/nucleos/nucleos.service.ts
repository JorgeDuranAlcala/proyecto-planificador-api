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
    return 'This action adds a new nucleo';
  }

  findAll() {
    try {
      return this.nucleosModel.findAll();
    } catch (error) {
      this.logger.error(error);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} nucleo`;
  }

  update(id: number, updateNucleoDto: UpdateNucleoDto) {
    return `This action updates a #${id} nucleo`;
  }

  remove(id: number) {
    return `This action removes a #${id} nucleo`;
  }
}
