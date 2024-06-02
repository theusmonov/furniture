import {Router} from "express";
import {PostLoginAdmin, PostLoginUser, PostRegisterAdmin, PostRegisterUser} from "./_controller.js";
import validateMiddleware from "../../shared/middleware/validate.js";
import {loginUsersSchema, registerUsersSchema} from "./_schema.js";


const authRouter = Router();

/**
 * @swagger
 * /user/auth/signup:
 *   post:
 *     summary: User registration
 *     description: Bu user uchun ro'yxatdan o'tish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *               phoneNumber:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       '201':
 *         description: User ro'yxatdan o'tish amalga oshdi!
 */



/**
 * @swagger
 * /admin/auth/signup:
 *   post:
 *     summary: Admin registration
 *     description: Bu admin uchun ro'yxatdan o'tish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *               phoneNumber:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Admin ro'yxatdan o'tish amalga oshdi!
 */


/**
 * @swagger
 * /user/auth/signin:
 *   post:
 *     summary: User login
 *     description: Bu user uchun tizimga kirish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *             
 *     responses:
 *       '200':
 *         description: User tizimga kirish amalga oshdi!
 */


/**
 * @swagger
 * /admin/auth/signin:
 *   post:
 *     summary: Admin login
 *     description: Bu admin uchun tizimga kirish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *             
 *     responses:
 *       '200':
 *         description: Admin tizimga kirish amalga oshdi!
 */

authRouter.post("/user/auth/signup", validateMiddleware(registerUsersSchema), PostRegisterUser);
authRouter.post("/admin/auth/signup", validateMiddleware(registerUsersSchema), PostRegisterAdmin);
authRouter.post("/admin/auth/signin", validateMiddleware(loginUsersSchema), PostLoginAdmin);
authRouter.post("/user/auth/signin", validateMiddleware(loginUsersSchema), PostLoginUser);


export default authRouter;