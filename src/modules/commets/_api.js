import { Router } from "express";
import { UserAddCommet } from "./_controller.js";

const userAddCommetRouter = Router();

userAddCommetRouter.post("/user/addCommet", UserAddCommet);



export default userAddCommetRouter;