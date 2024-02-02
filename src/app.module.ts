import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { EstadosModule } from './estados/estados.module';
import { Estados } from './estados/entities/estado.model';
import { NucleosModule } from './nucleos/nucleos.module';
import { ProcesosModule } from './procesos/procesos.module';
import { RegionesModule } from './regiones/regiones.module';
import { IndicadoresModule } from './indicadores/indicadores.module';
import { Regiones } from './regiones/entities/region.model';
import { Nucleos } from './nucleos/entities/nucleo.model';
import { Procesos } from './procesos/entities/proceso.model';
import { Indicadores } from './indicadores/entities/indicadores.model';
import { IndicadoresV } from './indicadores/entities/indicadores_v.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'proyecto-pasantias-db-proyecto-pasantias.a.aivencloud.com',
      port: 20658,
      username: 'avnadmin',
      password: 'AVNS_mScxC62G-3lfOq3W0RN',
      database: 'proyecto-pasantias',
      /*       uri: 'postgres://rtssrddj:IPfqiC4LC6n9dNhDtWyWrXJbOuu3ltvy@berry.db.elephantsql.com/rtssrddj', */
      models: [Estados, Regiones, Nucleos, Procesos, Indicadores, IndicadoresV],
      autoLoadModels: true,
      synchronize: true,
    }),
    EstadosModule,
    NucleosModule,
    ProcesosModule,
    RegionesModule,
    IndicadoresModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
