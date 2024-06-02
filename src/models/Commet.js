import { DataTypes, Model } from 'sequelize';
import connectDb from '../db/index.js';
import { Users } from './Users.js';

export class Commet extends Model {}

Commet.init(
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    commets: {
      type: DataTypes.STRING,
      allowNull: true,
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
  },
  {
    sequelize: connectDb,
    tableName: 'commets',
    timestamps: true,
    paranoid: true,
    deletedAt: true,
    underscored: true,
  }
);
