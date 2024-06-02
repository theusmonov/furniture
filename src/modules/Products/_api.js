import { Router } from "express";
import { upload } from "../../utils/multer.js";
import {
  AddNewProduct,
  DeleteAllProducts,
  DeleteProductById,
  GetAllProducts,
  GetProductById,
  UpdateProduct,
} from "./_controller.js";

const productRouter = Router();


/**
 * @swagger
 * /admin/createProduct:
 *   post:
 *     summary: Create a new product
 *     description: Adds a new product with the provided details
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: category_id
 *         description: Kategoriyani ID si
 *         required: true
 *         type: string
 *       - in: formData
 *         name: img
 *         description: Mahsulot rasmi
 *         required: true
 *         type: file
 *       - in: formData
 *         name: name
 *         description: Mahsulot nomi
 *         required: true
 *         type: string
 *       - in: formData
 *         name: discount_price
 *         description: Chegirma narxi
 *         required: true
 *         type: number
 *       - in: formData
 *         name: current_price
 *         description: Joriy narxi
 *         required: true
 *         type: number
 *       - in: formData
 *         name: is_saved
 *         description: Saqlanganmi?
 *         required: true
 *         type: boolean
 *       - in: formData
 *         name: is_favorite
 *         description: Sevimlimi?
 *         required: true
 *         type: boolean
 *       - in: formData
 *         name: description
 *         description: Mahsulotning ta'rifini kiriting
 *         required: true
 *         type: string
 *       - in: formData
 *         name: country
 *         description: Mahsulotning mamlakati
 *         required: true
 *         type: string
 *       - in: formData
 *         name: is_modern
 *         description: Modernmi?
 *         required: true
 *         type: boolean
 *       - in: formData
 *         name: color
 *         description: Rangi
 *         required: true
 *         type: string
 *       - in: formData
 *         name: height
 *         description: Boyi
 *         required: true
 *         type: number
 *       - in: formData
 *         name: weight
 *         description: Vazni
 *         required: true
 *         type: number
 *       - in: formData
 *         name: length
 *         description: Uzunligi
 *         required: true
 *         type: number
 *     responses:
 *       '201':
 *         description: Product created successfully
 */

/**
 


/**
 * @swagger
 * /admin/getAllProducts:
 *   get:
 *     summary: Get all products
 *     description: Barcha mahsulotlar ro'yxati
 *     responses:
 *       '200':
 *         description: A list of products retrieved successfully
 *       '404':
 *         description: No products found
 */


/**
 * @swagger
 * /admin/getProductBy/:uuid:
 *   get:
 *     summary: Get product by ID
 *     description: Berilgan ID bo'yicha mahsulotni olish
 *     parameters:
 *       - in: path
 *         name: uuid
 *         description: Olingan mahsulotning ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Product retrieved successfully
 *       '404':
 *         description: Product not found
 */


/**
 * @swagger
 * /admin/updateProduct/:uuid:
 *   put:
 *     summary: Update a product by ID
 *     description: Update a product's information by its unique identifier
 *     parameters:
 *       - in: path
 *         name: uuid
 *         description: The ID of the product to be updated
 *         required: true
 *         schema:
 *           type: string
 *       - in: formData
 *         name: img
 *         description: The updated image for the product
 *         required: false
 *         type: file
 *     responses:
 *       '200':
 *         description: Product updated successfully
 *       '404':
 *         description: Product not found
 */

/** 
 * @swagger
* /admin/deleteAllProducts:
*   delete:
*     summary: Delete all products
*     description: Delete all products from the database
*     responses:
*       '200':
*         description: All products deleted successfully
*/

/**
 * @swagger
 * /admin/deleteProductBy/:uuid:
 *   delete:
 *     summary: Mahsulotni identifikator bo'yicha o'chirish
 *     description: Mahsulotni identifikator bo'yicha ma'lumotlar bazasidan o'chirish
 *     parameters:
 *       - in: path
 *         name: uuid
 *         description: O'chiriladigan mahsulotning identifikatori
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Mahsulot muvaffaqiyatli o'chirildi
 *       '404':
 *         description: Mahsulot topilmadi
 */









productRouter.get("/admin/getAllProducts", GetAllProducts);
productRouter.get("/admin/getProductBy/:uuid", GetProductById);
productRouter.post("/admin/createProduct", upload.single("img"), AddNewProduct);
productRouter.put("/admin/updateProduct/:uuid",upload.single("img"), UpdateProduct);
productRouter.delete("/admin/deleteAllProducts", DeleteAllProducts);
productRouter.delete("/admin/deleteProductBy/:uuid", DeleteProductById);

export default productRouter;
