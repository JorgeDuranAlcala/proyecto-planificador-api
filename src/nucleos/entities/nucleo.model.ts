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
import { Regiones } from 'src/regiones/entities/region.model';

@Table({
  tableName: 'nucleos',
  timestamps: false,
  charset: 'utf8',
  collate: 'utf8_general_ci',
})
export class Nucleos extends Model<Nucleos> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column
  id_nucleo: number;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  nucleo: string;

  @ForeignKey(() => Regiones)
  @Column(DataType.INTEGER)
  id_region: number;

  @BelongsTo(() => Regiones)
  region: Regiones;

  /*   @AllowNull(true)
    @Column(DataType.STRING(1))
    trial125: string; */
}
