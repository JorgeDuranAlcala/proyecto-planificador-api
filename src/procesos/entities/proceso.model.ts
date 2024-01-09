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
  tableName: 'procesos',
  timestamps: false,
  charset: 'utf8',
  collate: 'utf8_general_ci',
})
export class Procesos extends Model<Procesos> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataType.INTEGER)
  id_proceso: number;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  proceso: string;

  /*   @AllowNull(true)
  @Column(DataType.TIME)
  created_at: Date;

  @AllowNull(true)
  @Column(DataType.TIME)
  updated_at: Date; */

  /*   @AllowNull(true)
    @Column(DataType.STRING(1))
    trial125: string; */
}
