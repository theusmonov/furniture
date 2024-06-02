import { Category } from '../models/Category.js';
import { Product } from '../models/Products.js';
import connectDb from '../db/index.js';
import { Users } from '../models/Users.js';
import { Commet } from '../models/Commet.js';
import { Order } from '../models/Order.js';
import { OrderItem } from '../models/OrderItem.js';

export const relation = async () => {
  try {
    await connectDb.sync({ alter: true });
   
    Category.hasMany(Product, { foreignKey: 'category_id' });
    Product.belongsTo(Category);

    Users.hasMany(Commet, { foreignKey: 'user_id' });
    Commet.belongsTo(Users);

    Users.hasMany(Order, { foreignKey: 'user_id' , as: 'orders' });
    Order.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });

    Order.hasMany(OrderItem, { foreignKey: 'order_id', as: 'orderItems', onDelete: 'CASCADE' });
    OrderItem.belongsTo(Order,  { foreignKey: 'order_id', as: 'order' });

    OrderItem.hasMany(Product, { foreignKey: 'product_id', as: 'product' });
    OrderItem.hasMany(Category, { foreignKey: 'category_id', as: 'category' });

    await connectDb.sync({ alter : true });
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
};

export const modelSync = async () => {
  try {
    await connectDb.sync();
    console.log("Modellar bo'glanishi muvaffaqiyatli amalga oshdi!");
  } catch (e) {
    console.error("Modellar bog'lanishda muammo bor!", e.message);
  }
};
