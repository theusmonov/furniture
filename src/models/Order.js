import { DataTypes, Model } from 'sequelize';
import connectDb from '../db/index.js';
import { Users } from './Users.js';

export class Order extends Model {}

Order.init(
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Users,
        key: 'uuid',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    total_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pending',
    },
  },
  {
    sequelize: connectDb,
    tableName: 'orders',
    timestamps: true,
    paranoid: true,
    deletedAt: true,
    underscored: true,
  }
);
