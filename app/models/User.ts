import {
  Table,
  Column,
  Model,
  DataType,
  BeforeCreate,
} from "sequelize-typescript";
import bcrypt from "bcryptjs";

@Table({
  tableName: "users",
  timestamps: true,
})
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  role!: string;

  @BeforeCreate
  static async hashPassword(instance: User) {
    const salt = await bcrypt.genSalt(10);
    instance.password = await bcrypt.hash(instance.password, salt);
  }

  async comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
