import { Router } from "express";
import { DeleteAdminById, GetAdminUsers, GetUsersAll } from "./_controller.js";


const adminRouter = Router();
const userRouter = Router();

adminRouter.get("/allAdmins", GetAdminUsers);
userRouter.get("/allUsers", GetUsersAll)
adminRouter.delete("/adminDelete", DeleteAdminById);



export {adminRouter, userRouter};