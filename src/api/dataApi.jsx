import axios from 'axios';

const productsApi = axios.create({
  baseURL: 'https://fakestoreapi.com/products'
});
const usersApi = axios.create({
  baseURL: 'https://fakestoreapi.com/users'
});
const blogApi = axios.create({
  baseURL: 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=3d0723dec2fd4f39902115b219e4588es'
});

export const getAllProducts = async () => {
    const response = await productsApi.get();
    return response.data;
  }

export const getAllUsers = async () => {
  const response = await usersApi.get();
  return response.data;
}

export const getAllBlogs = async () => {
  const response = await blogApi.get();
  return response.data;
}
