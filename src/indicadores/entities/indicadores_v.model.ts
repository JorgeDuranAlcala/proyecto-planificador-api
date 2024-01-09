import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
} from 'sequelize-typescript';

@Table({
  tableName: 'indicadores_v',
  timestamps: false,
  charset: 'utf8',
  collate: 'utf8_general_ci',
})
export class IndicadoresV extends Model<IndicadoresV> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column
  id_indicador_v: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  id_indicador: number;

  @AllowNull(true)
  @Column(DataType.INTEGER)
  valor: number;

  @AllowNull(false)
  @Column(DataType.STRING(10))
  valor_sn: string;

  @AllowNull(true)
  @Column(DataType.INTEGER)
  id_proceso: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  id_nucleo: number;

  @AllowNull(true)
  @Column(DataType.DATE)
  fecha: Date;

  @AllowNull(true)
  @Column(DataType.TIME)
  created_at: Date;

  @AllowNull(true)
  @Column(DataType.TIME)
  updated_at: Date;

  /*   @AllowNull(true)
        @Column(DataType.STRING(1))
        trial125: string; */
}
