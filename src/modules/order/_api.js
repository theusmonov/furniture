import { Router } from "express";
import { DeleteOrder, getOrdersController, placeOrder } from "./_controller.js";


const orderRouter = Router();

orderRouter.post("/user/createOrder", placeOrder);
orderRouter.delete('/admin/deleteOrders/:uuid', DeleteOrder);
orderRouter.get("/admin/getAllOrders", getOrdersController)
export default orderRouter;