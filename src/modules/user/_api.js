import { Router } from "express";
import { DeleteAdminById, GetAdminUsers } from "./_controller.js";


const adminRouter = Router();

adminRouter.get("/allAdmins", GetAdminUsers);
adminRouter.delete("/adminDelete", DeleteAdminById)

export default adminRouter;