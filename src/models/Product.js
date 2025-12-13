import { db } from "../data.js";

import {
    collection,
    getDoc,
    getDocs,
    addDoc,
    deleteDoc,
    doc
} from "firebase/firestore";

const productsCollection = collection(db, "products");

export const getAllProducts = async () => {
    const promise = await getDocs(productsCollection);
    const products = [];
    promise.forEach((p) => {
        products.push({
            id: p.id,
            ...p.data()
        });
    });
    return products;
};

export const getProductById = async (id) => {
    const product = await getDoc(doc(productsCollection, id));
    if (!product.exists)
        return null;
    return product.data();    
};

export const createProduct = async (data) => {
    await addDoc(productsCollection, data);
};

export const deleteProduct = async (id) => {
    const productRef = doc(productsCollection, id);
    const product = await getDoc(productRef);
    if (!product.exists())
        return false;
    await deleteDoc(productRef);
    return true;
};
