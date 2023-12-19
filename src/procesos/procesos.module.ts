import { Module } from '@nestjs/common';
import { ProcesosService } from './procesos.service';
import { ProcesosController } from './procesos.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Procesos } from './entities/proceso.model';

@Module({
  imports: [SequelizeModule.forFeature([Procesos])],
  controllers: [ProcesosController],
  providers: [ProcesosService],
})
export class ProcesosModule {}
