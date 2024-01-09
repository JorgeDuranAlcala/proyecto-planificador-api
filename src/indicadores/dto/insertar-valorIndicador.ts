import { IndicadorV } from '../entities/indicador_v.entity';

export class InsertarValorIndicadorDto {
  indicadores_v: IndicadorV[];
  id_nucleo: number;
  fecha: Date;
}
