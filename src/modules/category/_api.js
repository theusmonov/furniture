import {Router} from 'express';
import {upload} from "../../utils/multer.js";
import {
    AddCategory,
    DeleteAllCategory,
    DeleteCategoryById,
    GetAllCategory,
    GetCategoryById,
    UpdateCategory
} from "./_controller.js";


const categoryRouter = Router();



/**
 * @swagger
 * /admin/createCategory:
 *   post:
 *     summary: Create a new category
 *     description: Adds a new category with the provided name and image
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: categoryName
 *         description: Kategoriya title bo'ladi formadan
 *         required: true
 *         type: string
 *       - in: formData
 *         name: categoryImage
 *         description: Kategoriya rasmi bo'ladi formadan
 *         required: true
 *         type: file
 *     responses:
 *       '201':
 *         description: Category created successfully
 */


/**
 * @swagger
 * /admin/getAllCategory:
 *   get:
 *     summary: Get all categories
 *     description: Barcha kategoriyalar
 *     responses:
 *       '200':
 *         description: A list of categories retrieved successfully
 *       '404':
 *         description: No categories found
 */

/**
 * @swagger
 * /admin/getCategoryById/:uuid:
 *   get:
 *     summary: Get category by ID
 *     description: Kategoriyani ID bo'yicha olish va unga ulangan productlar chiqadi
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Kategoriyani identifikator
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Category retrieved successfully
 *       '404':
 *         description: Category not found
 */



/**
 * @swagger
 * /admin/updateCategory/:uuid:
 *   put:
 *     summary: Update category by ID
 *     description: Kategoriyani ID bo'yicha yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Kategoriyani identifikator bilan update qilish
 *         required: true
 *         schema:
 *           type: string
 *       - in: formData
 *         name: categoryName
 *         description: Kategoriya nomini yangilang
 *         required: false
 *         type: string
 *       - in: formData
 *         name: categoryImage
 *         description: Kategoriya rasmini yangilang
 *         required: false
 *         type: file
 *     responses:
 *       '200':
 *         description: Category updated successfully
 *       '404':
 *         description: Category not found
 */



/**
 * @swagger
 * /admin/deleteAllCategory:
 *   delete:
 *     summary: Delete all categories
 *     description: Barcha kategoriyalarni o'chirish
 *     responses:
 *       '200':
 *         description: All categories deleted successfully
 *       '404':
 *         description: No categories found to delete
 */


/**
 * @swagger
 * /admin/deleteCategoryBy/:uuid:
 *   delete:
 *     summary: Delete category by ID
 *     description: Berilgan ID bo'yicha kategoriyani o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: O'chiriladigan kategoriyani ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Category deleted successfully
 *       '404':
 *         description: Category not found
 */


categoryRouter.get("/admin/getAllCategory", GetAllCategory);
categoryRouter.get("/admin/getCategoryBy/:uuid", GetCategoryById);
categoryRouter.post("/admin/createCategory", upload.single("categoryImage"), AddCategory);
categoryRouter.put("/admin/updateCategory/:uuid", upload.single("categoryImage"), UpdateCategory);
categoryRouter.delete("/admin/deleteAllCategory", DeleteAllCategory);
categoryRouter.delete("/admin/deleteCategoryBy/:uuid", DeleteCategoryById)

export default categoryRouter;