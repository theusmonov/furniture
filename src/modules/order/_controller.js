import { upload } from '../../utils/multer.js';
import { createOrder, deleteOrderById, getAllOrders } from './orderService.js';

export const placeOrder = (req, res, next) => {
    upload.array('images', 10)(req, res, async function (err) {
        if (err) {
            return res.status(500).json({ message: 'Error uploading images', error: err.message });
        }

        if (!req.body.user_id || !req.body.items) {
            return res.status(400).json({ message: 'User ID and items are required.' });
        }

        const { items, total_amount } = req.body;
        const user_id = req.body.user_id;
        const files = req.files || [];

        try {
            const orderData = await createOrder(user_id, items, total_amount, files);
            res.status(201).json({ message: 'Order placed successfully', order: orderData.order });
        } catch (error) {
            next(error.message)
        }
    });
};


export const DeleteOrder = async (req, res, next) => {
    const orderId = req.params.uuid;

    try {
        const result = await deleteOrderById(orderId);
        res.status(200).json(result);
    } catch (error) {
        if (error.message === "Order not found") {
            return res.status(404).json({ message: error.message });
        }
        console.error("Error deleting order:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


export const getOrdersController = async (req, res, next) => {
    try {
        const orders = await getAllOrders();
        return res.status(200).json({message: "Get all orders successfully", data: orders});
    } catch (error) {
       next(error)
    }
};