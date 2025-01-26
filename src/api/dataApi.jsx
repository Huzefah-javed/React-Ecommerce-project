import axios from 'axios';

const productsApi = axios.create({
  baseURL: 'https://fakestoreapi.com/products'
});
const usersApi = axios.create({
  baseURL: 'https://fakestoreapi.com/users'
});

export const getAllProducts = async () => {
  try {
    const response = await productsApi.get();
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Rethrow the error for further handling in the component
  }
};

export const getAllUsers = async () => {
  const response = await usersApi.get();
  return response.data;
}
