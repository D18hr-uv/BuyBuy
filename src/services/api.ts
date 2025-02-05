import axios from 'axios';
import { Product } from '../types';

const BASE_URL = 'https://fakestoreapi.com';

export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};

export const getCategories = async (): Promise<string[]> => {
  const response = await axios.get(`${BASE_URL}/products/categories`);
  return response.data;
};

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  const response = await axios.get(`${BASE_URL}/products/category/${category}`);
  return response.data;
};

export const getProduct = async (id: number): Promise<Product> => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  return response.data;
};