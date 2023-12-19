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
  tableName: 'estados',
  timestamps: false,
  charset: 'utf8',
  collate: 'utf8_general_ci',
})
export class Estados extends Model<Estados> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING(50))
  estado: string;

  @AllowNull(false)
  @Column(DataType.CHAR(2))
  iso: string;

  /*   @AllowNull(true)
  @Column(DataType.STRING(1))
  trial125: string; */
}
