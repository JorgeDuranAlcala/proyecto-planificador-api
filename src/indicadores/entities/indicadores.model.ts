import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Procesos } from 'src/procesos/entities/proceso.model';

@Table({
  tableName: 'indicadores',
  timestamps: false,
  charset: 'utf8',
  collate: 'utf8_general_ci',
})
export class Indicadores extends Model<Indicadores> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column
  id_indicador: number;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  indicador: string;

  @ForeignKey(() => Procesos)
  @Column(DataType.INTEGER)
  id_proceso: number;

  @BelongsTo(() => Procesos)
  proceso: Procesos;

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
