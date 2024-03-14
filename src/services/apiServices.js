import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products';

// Fetches a list of all products
export const fetchProducts = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        throw error; // Rethrow to allow caller to handle
    }
};

// Fetches details for a single product by its ID
export const getProductDetails = async (id) => {
    // implement it using similar logic as fetchProducts function
    try{
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw error; // Rethrow to allow caller to handle
    }
};

// Deletes a product by its ID
export const removeProduct = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw error; // Rethrow to allow caller to handle
    }
};

// Adds a new product to the database
export const addProduct = async (product) => {
    try{
         const responce = await axios.post(`${BASE_URL}/add`, product);
         return responce.data;
    } catch (error) {
        throw error;
    }
};

// Edits an existing product by ID
export const editProduct = async (id, product) => {
    try{
        const responce = await axios.put(`${BASE_URL}/${id}`, product);
        return responce.data;
    } catch (error) {
        throw error;
    }
};