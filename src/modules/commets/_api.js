import { Router } from "express";
import { AdminDeleteCommetUser, UserAddCommet, UserGetAllCommets } from "./_controller.js";

const userAddCommetRouter = Router();

userAddCommetRouter.post("/user/addCommet", UserAddCommet);
userAddCommetRouter.get("/admin/getAllCommet", UserGetAllCommets);
userAddCommetRouter.delete("/admin/deleteCommetUser/:uuid", AdminDeleteCommetUser)



export default userAddCommetRouter;