import productsService from "../services/products.service.js"

export const getAllProducts = async (req, res) => {
    try {
        res.status(200).json(await productsService.getAllProducts());
    } catch (error) {
        res.status(500).json(errorHandler("Internal Server Error", error.message));
    };
};

export const getProductById = async (req, res) => {
    const id = req.params.id;
    if (!id)
        return res.status(400).json(errorHandler("Bad Request", "El id no es válido"));
    try {
        const product = await productsService.getProductById(id);
        if (product)
            res.status(200).json(product);
        else
            res.status(404).json(errorHandler("Not Found", "Producto no encontrado"));
    } catch (error) {
        res.status(500).json(errorHandler("Internal Server Error", error.message));
    };
};

export const createProduct = async (req, res) => {
    try {
        const { category, description, name, price, stock } = req.body;
        if (category && description && name && price && stock) {
            const newProduct = await productsService.createProduct( {category, description, name, price, stock } );
            res.status(201).json(newProduct);
        } else {
            res.status(400).json(errorHandler("Bad Request", "Alguno de los campos enviados no es válido"));
        }
    } catch (error) {
        res.status(500).json(errorHandler("Internal Server Error", error.message));
    };
};

export const deleteProduct = async (req, res) => {
    const id = req.params.id;
    if (!id)
        return res.status(400).json(errorHandler("Bad Request", "El id no es válido"));
    try {
        const deleted = await productsService.deleteProduct(id);
        if (!deleted)
            return res.status(404).json(errorHandler("Not Found", "Producto no encontrado"));
        res.status(200).json(`Producto borrado con éxito`);
    } catch (error) {
        res.status(500).json(errorHandler("Internal Server Error", error.message));
    };
};

const errorHandler = (errorType, errorMessagge) => {
    return {
        "status": false,
        "errorType": errorType,
        "message": errorMessagge,
    };
};
