import { BadRequestError, NotFoundError } from "../../shared/errors/classes.js";
import { Product } from "../../models/Products.js";
import { Category } from "../../models/Category.js";
import pkg from "validator";
const { isUUID } = pkg;

const createProduct = async (data, req) => {
  const { filename } = req.file || {};
  const {
    category_id,
    name,
    discount_price,
    current_price,
    is_saved,
    is_favorite,
    description,
    country,
    is_modern,
    color,
    height,
    weight,
    length,
  } = data;

  if (
    !category_id ||
    !name ||
    !discount_price ||
    !current_price ||
    !is_saved ||
    !is_favorite ||
    !description ||
    !country ||
    !is_modern ||
    !color ||
    !height ||
    !weight ||
    !length
  ) {
    throw new BadRequestError("Missing required fields");
  }

  if (!isUUID(category_id)) {
    throw new BadRequestError("Invalid category id format");
  }

  const findIdCategory = await Category.findByPk(category_id);

  if (!findIdCategory) {
    throw new BadRequestError("Invalid category id provided");
  }

  const product = await Product.create({
    category_id,
    img: filename ? `img/${filename}` : "",
    name,
    discount_price,
    current_price,
    is_saved,
    is_favorite,
    description,
    country,
    is_modern,
    color,
    height,
    weight,
    length,
  });

  return product;
};

const getAllProducts = async () => {
  const data = await Product.findAll();
  if (!data) {
    throw new NotFoundError("All products not found");
  }

  const products = data.map((product) => ({
    ...product.dataValues,
    img: `https://furniture-imoe.onrender.com/uploads/${product.img}`,
  }));

  return products;
};

const getProductById = async (uuid) => {
  const data = await Product.findByPk(uuid);
  if (!data) {
    throw new NotFoundError(`Product with id ${uuid} not found`);
  }

  const product = {
    ...data.dataValues,
    img: `https://furniture-imoe.onrender.com/uploads/${data.img}`,
  };

  return product;
};

const deleteAllProduct = async (data) => {
  const delProd = await Product.findAll();

  if (!delProd.length) {
    throw new NotFoundError("Deleted products not found");
  }

  await Product.destroy({ where: {}, force: true });
  return {
    message: "All products have been deleted",
    deletedCount: delProd.length,
  };
};

const deleteProductById = async (uuid) => {
  const productToDelete = await Product.findByPk(uuid);

  if (!productToDelete) {
    throw new NotFoundError(`Mahsulot ${uuid} ID bilan topilmadi`);
  }

  await productToDelete.destroy();
  return { message: `Mahsulot ${uuid} ID bilan muvaffaqiyatli o'chirildi` };
};

const updateProductBy = async (uuid, data, req) => {
  const { filename } = req.file;

  const findProduct = await Product.findByPk(uuid);

  if (!findProduct) {
    throw new NotFoundError(`Product with ID ${uuid} not found`);
  }

  await findProduct.update({
    category_id: data.category_id,
    img: filename ? `img/${filename}` : findProduct.img,
    name: data.name,
    discount_price: data.discount_price,
    current_price: data.current_price,
    is_saved: data.is_saved,
    is_favorite: data.is_favorite,
    description: data.description,
    country: data.country,
    is_modern: data.is_modern,
    color: data.color,
    height: data.height,
    weight: data.weight,
    length: data.length,
  });

  return { message: `Product with ID ${uuid} updated successfully` };
};

export {
  createProduct,
  deleteAllProduct,
  deleteProductById,
  updateProductBy,
  getAllProducts,
  getProductById,
};
