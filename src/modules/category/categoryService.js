import { Category } from "../../models/Category.js";
import {BadRequestError, NotFoundError} from "../../shared/errors/classes.js";
import {Product} from "../../models/Products.js";
import {Op} from "sequelize"


const createCategory = async (req, data) => {
    const { filename } = req.file;
    const { categoryName } = data;

    const checkCategory = await Category.findOne({
        where: {
            categoryName: {
                [Op.iLike] : categoryName
            }
        }
    });

    if (checkCategory) {
        throw new BadRequestError('Category already exists');
    }

    const newData = await Category.create({
        categoryName,
        categoryImage: `img/${filename}`,
    });

    return newData;
};


const getAllCategories = async () => {
    const getData = await Category.findAll({
        include: Product
    });

    if(getData.length === 0) {
        throw new NotFoundError("Category not found");
    }

    const data = getData.map(category => ({
        uuid: category.uuid,
        categoryName: category.categoryName,
        categoryImage: `https://furniture-imoe.onrender.com/uploads/${category.categoryImage}`,
        productCount: category.Products.length
    }));

    return data;
}

const getCategoryById = async (uuid) => {
    const dataById = await Category.findOne({
        where: {uuid},
        include: [Product]
    })

    if(!dataById){
        throw new NotFoundError(`Category with id ${uuid} not found`);
    }

    const result = {
        uuid: dataById.uuid,
        categoryName: dataById.categoryName,
        categoryImage: `https://furniture-imoe.onrender.com/uploads/${dataById.categoryImage}`, 
        products: dataById.Products
    };

    return result;
}



const updateCategoryBy = async (uuid, data, req) => {
    const { filename } = req.file;
    const updateData = await Category.findByPk(uuid);
    if(!updateData){
        throw new NotFoundError(`Category with ID ${uuid} not found`);
    }

    const newUpdateData = {
        categoryName :  data.categoryName ? data.categoryName : updateData.categoryImage,
        categoryImage : filename ? `img/${filename}` : updateData.categoryImage,
    }

    await updateData.update(newUpdateData);
    return updateData;
}



const deleteAllCategory = async () => {
   const categories = await Category.findAll();

   if(!categories.length) {
       throw new NotFoundError("Deleted category not found");
   }

   await Category.destroy({where: {}, force: true});
   return {message: "All categories have been deleted", deletedCount: categories.length};
}


const deleteCategoryById = async (uuid) => {
    const categoryId = await Category.findByPk(uuid)

    if(!categoryId){
        throw new NotFoundError(`Category with id ${uuid} not found`);
    }

    await categoryId.destroy();
    const products = await Product.findAll({ where: { category_id: uuid } });

    for (const product of products) {
        await product.destroy();
    }
    
    return {message: `Category with id ${uuid} deleted successfully`};
}




export {createCategory, deleteAllCategory, deleteCategoryById, getAllCategories, getCategoryById, updateCategoryBy}
