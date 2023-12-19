import { Module } from '@nestjs/common';
import { IndicadoresService } from './indicadores.service';
import { IndicadoresController } from './indicadores.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Indicadores } from './entities/indicadores.model';

@Module({
  imports: [SequelizeModule.forFeature([Indicadores])],
  controllers: [IndicadoresController],
  providers: [IndicadoresService],
})
export class IndicadoresModule {}
