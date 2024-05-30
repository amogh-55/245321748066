// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://your-backend-api.com/api',
});

export const fetchProducts = (params) => api.get('/products', { params });
export const fetchProductById = (id) => api.get(`/products/${id}`);
