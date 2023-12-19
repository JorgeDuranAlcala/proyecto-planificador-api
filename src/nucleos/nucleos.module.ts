import { Module } from '@nestjs/common';
import { NucleosService } from './nucleos.service';
import { NucleosController } from './nucleos.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Nucleos } from './entities/nucleo.model';

@Module({
  imports: [SequelizeModule.forFeature([Nucleos])],
  controllers: [NucleosController],
  providers: [NucleosService],
})
export class NucleosModule {}
