import {
    getAllProducts as getAllProductsFromModel,
    getProductById as getProductByIdFromModel,
    createProduct as createProductFromModel,
    deleteProduct as deleteProductFromModel
} from "../models/Product.js";

export const getAllProducts = async () => {
    try {
        return await getAllProductsFromModel();
    } catch (error) {
        throw new Error(error);
    };
};

export const getProductById = async (id) => {
    try {
        return await getProductByIdFromModel(id);
    } catch(error) {
        throw new Error(error);
    };
};

export const createProduct = async (product) => {
    try {
        await createProductFromModel(product);
    } catch(error) {
        throw new Error(error);
    };
};

export const deleteProduct = async (id) => {
    try {
        return await deleteProductFromModel(id);
    } catch(error) {
        throw new Error(error);
    };
};

export default { getAllProducts, getProductById, createProduct, deleteProduct };