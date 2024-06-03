import { Router } from "express";
import { GetAdminUsers } from "./_controller.js";


const adminRoute = Router();

adminRoute.get("/allAdmins", GetAdminUsers);

export default adminRoute;