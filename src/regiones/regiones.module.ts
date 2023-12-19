import { Module } from '@nestjs/common';
import { RegionesService } from './regiones.service';
import { RegionesController } from './regiones.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Regiones } from './entities/region.model';

@Module({
  imports: [SequelizeModule.forFeature([Regiones])],
  controllers: [RegionesController],
  providers: [RegionesService],
})
export class RegionesModule {}
