import { Module } from '@nestjs/common';
import { EstadosService } from './estados.service';
import { EstadosController } from './estados.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Estados } from './entities/estado.model';

@Module({
  imports: [SequelizeModule.forFeature([Estados])],
  controllers: [EstadosController],
  providers: [EstadosService],
})
export class EstadosModule {}
