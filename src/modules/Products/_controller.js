import {createProduct, deleteAllProduct, deleteProductById, getAllProducts, getProductById, updateProductBy} from "./productService.js";


const AddNewProduct = async (req, res, next) => {
    try {
        const product = await createProduct(req.body, req);
        return res.status(201).json({message: 'Product created', newProduct: product});
    } catch (err) {
        next(err)
    }
};

const GetAllProducts = async (req, res, next) => {
    try {
        const data = await getAllProducts();
        return res.status(200).json({message: 'Products list', allCategory: data});
    } catch (err) {
        next(err)
    }
}



const GetProductById = async (req, res, next) => {
    try {
        const data = await getProductById(req.params.uuid);
        return res.status(200).json({message: 'Product with by ID', getProductById: data});
    } catch (err) {
        next(err)
    }
}

const DeleteAllProducts = async (req, res, next) => {
    try {
        const data = await deleteAllProduct();
        return res.status(200).json({message: 'All products deleted', deleteAllProducts: data});
    } catch (err) {
        next(err)
    }
};

const DeleteProductById = async (req, res, next) => {
    try {
        const data = await deleteProductById(req.params.uuid);
        return res.status(200).json({message: 'Product with deleted by ID', dataDeletedById: data});
    } catch (err) {
        next(err)
    }
};

const UpdateProduct = async (req, res, next) => {
    try {
        const data = await updateProductBy(req.params.uuid, req.body, req);
        return res.status(200).json({message: 'Product updated', updatedData: data});
    } catch (err) {
        next(err)
    }
}

export {AddNewProduct, DeleteAllProducts, DeleteProductById, UpdateProduct, GetAllProducts, GetProductById}