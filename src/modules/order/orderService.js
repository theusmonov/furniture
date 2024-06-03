import { Category } from "../../models/Category.js";
import { Order } from "../../models/Order.js";
import { OrderItem } from "../../models/OrderItem.js";
import { Product } from "../../models/Products.js";
import { Users } from "../../models/Users.js";
import { NotFoundError } from "../../shared/errors/classes.js";

export const createOrder = async (user_id, items, total_amount, files) => {
    const user = await Users.findByPk(user_id);

    if (!user) {
        throw new NotFoundError("Please signup before this user can't order");
    }

    const order = await Order.create({ user_id, total_amount });

    const orderItems = [];
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const orderItem = await OrderItem.create({
            order_id: order.uuid,
            product_id: item.uuid,
            category_id: item.category_id,
            img: files[i] ? files[i].filename : item.img,
            name: item.name,
            discount_price: item.discount_price,
            current_price: item.current_price,
            description: item.description,
            country: item.country,
            is_modern: item.is_modern,
            color: item.color,
            height: item.height,
            weight: item.weight,
            length: item.length,
            count: item.count
        });
        orderItems.push(orderItem);
    }

    return { order, orderItems };
};


export const deleteOrderById = async (orderId) => {
    const order = await Order.findByPk(orderId);

    if (!order) {
        throw new Error("Order not found");
    }

    await OrderItem.destroy({ where: { order_id: orderId } });

  
    await order.destroy();

    return { message: "Order and related items deleted successfully" };
};


export const getAllOrders = async () => {
    const orderItems = await OrderItem.findAll({
        include: [
            {
                model: Order,
                as: 'order',
                include: [{ model: Users, as: 'user' }]
            },
            {
                model: Product,
                as: 'product',
            },
            {
                model: Category,
                as: 'category',
            },
        ],
    });

    if (!orderItems || orderItems.length === 0) {
        throw new NotFoundError("No orders found");
    }

    const orders = orderItems.map(orderItem => ({
        ...orderItem.dataValues,
        product: {
            ...orderItem.product.dataValues,
            img: `$https://furniture-imoe.onrender.com/upload/${orderItem.product.img}`
        }
    }));

    return orders;
};