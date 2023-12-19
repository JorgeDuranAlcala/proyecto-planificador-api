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
  tableName: 'regiones',
  timestamps: false,
  charset: 'utf8',
  collate: 'utf8_general_ci',
})
export class Regiones extends Model<Regiones> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column
  id_region: number;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  region: string;

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
