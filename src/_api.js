import {Router} from "express";
import authRouter from "./modules/auth/_api.js";
import categoryRouter from "./modules/category/_api.js";
import productRouter from "./modules/Products/_api.js";
import userAddCommetRouter from "./modules/commets/_api.js";
import orderRouter from "./modules/order/_api.js";
import swaggerJSDoc from "swagger-jsdoc"
import adminRouter from "./modules/user/_api.js";

const mainRouter = Router();

mainRouter.use("/", authRouter);
mainRouter.use("/", categoryRouter);
mainRouter.use("/", productRouter);
mainRouter.use("/", userAddCommetRouter);
mainRouter.use("/", orderRouter);
mainRouter.use("/", adminRouter)



const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Bu mebel sayti uchun swagger api hisoblanadi :)',
        version: '1.0.0',
        description: 'Description of your API',
      },
      servers: [
        {
          url: 'https://furniture-imoe.onrender.com/',
        },
      ],
    },
    apis: ['./src/modules/auth/_api.js', './src/modules/category/_api.js', './src/modules/Products/_api.js'], 
  
  };
  
export const swaggerSpec = swaggerJSDoc(options);



export default mainRouter;