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
  tableName: 'usuarios',
  timestamps: false,
  charset: 'utf8',
  collate: 'utf8_general_ci',
})
export class Usuarios extends Model<Usuarios> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column
  id_usuario: number;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  cedula: string;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  nombre: string;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  apellido: string;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  password: string;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  profileUrl: string;

  /*   @AllowNull(true)
      @Column(DataType.STRING(1))
      trial125: string; */
}
