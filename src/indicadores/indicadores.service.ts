import { Injectable, Logger } from '@nestjs/common';
import { CreateIndicadoreDto } from './dto/create-indicadore.dto';
import { UpdateIndicadoreDto } from './dto/update-indicadore.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Indicadores } from './entities/indicadores.model';
import { IndicadoresV } from './entities/indicadores_v.model';
import { InsertarValorIndicadorDto } from './dto/insertar-valorIndicador';

@Injectable()
export class IndicadoresService {
  private readonly logger: Logger = new Logger(IndicadoresService.name);

  constructor(
    @InjectModel(Indicadores)
    private readonly indicadoresModel: typeof Indicadores,
    @InjectModel(IndicadoresV)
    private readonly indicadoresVModel: typeof IndicadoresV,
  ) {}
  create(createIndicadoreDto: CreateIndicadoreDto) {
    return this.indicadoresModel.create(createIndicadoreDto);
  }

  findAll() {
    try {
      return this.indicadoresModel.findAll();
    } catch (error) {
      this.logger.error(error);
    }
  }

  findOne(id: number) {
    return this.indicadoresModel.findOne({
      where: {
        id_indicador: id,
      },
    });
  }

  update(id: number, updateIndicadoreDto: UpdateIndicadoreDto) {
    return this.indicadoresModel.update(updateIndicadoreDto, {
      where: {
        id_indicador: id,
      },
    });
  }

  remove(id: number) {
    return this.indicadoresModel.destroy({
      where: {
        id_indicador: id,
      },
    });
  }

  async insertarValorIndicador(
    insertarValorIndicadorDto: InsertarValorIndicadorDto,
  ) {
    try {
      /*       return await Promise.all(
        insertarValorIndicadorDto.indicadores_v.map(async (indicador) => {
          return await this.indicadoresVModel.create({
            id_indicador: indicador.id_indicador,
            valor: indicador.valor,
            valor_sn: indicador.valor_sn,
            id_proceso: indicador.id_proceso,
            id_nucleo: insertarValorIndicadorDto.id_nucleo,
            fecha: insertarValorIndicadorDto.fecha,
          });
        }),
      ); */
      /*       const indicador = insertarValorIndicadorDto.indicadores_v[0];
      return await this.indicadoresVModel.create({
        id_indicador: indicador.id_indicador,
        valor: indicador.valor,
        valor_sn: indicador.valor_sn,
        id_proceso: indicador.id_proceso,
        id_nucleo: insertarValorIndicadorDto.id_nucleo,
        fecha: insertarValorIndicadorDto.fecha,
      }); */
      return await this.indicadoresVModel.bulkCreate(
        insertarValorIndicadorDto.indicadores_v.map((indicador) => {
          return {
            id_indicador: indicador.id_indicador,
            valor: indicador.valor,
            valor_sn: indicador.valor_sn,
            id_proceso: indicador.id_proceso,
            id_nucleo: insertarValorIndicadorDto.id_nucleo,
            fecha: insertarValorIndicadorDto.fecha,
          };
        }),
      );
    } catch (error) {
      this.logger.error(error);
    }
  }
}
