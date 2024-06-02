import { DataTypes, Model } from 'sequelize';
import connectDb from '../db/index.js';
import { Category } from './Category.js';

export class Product extends Model {}

Product.init(
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    img: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    discount_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    current_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_saved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    is_favorite: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_modern: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    length: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Category,
        key: 'uuid',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  },
  {
    sequelize: connectDb,
    tableName: 'product',
    timestamps: true,
    paranoid: true,
    deletedAt: true,
    underscored: true
  }
);


