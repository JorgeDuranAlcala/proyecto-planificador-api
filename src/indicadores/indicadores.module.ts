import { Module } from '@nestjs/common';
import { IndicadoresService } from './indicadores.service';
import { IndicadoresController } from './indicadores.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Indicadores } from './entities/indicadores.model';
import { IndicadoresV } from './entities/indicadores_v.model';

@Module({
  imports: [SequelizeModule.forFeature([Indicadores, IndicadoresV])],
  controllers: [IndicadoresController],
  providers: [IndicadoresService],
})
export class IndicadoresModule {}
