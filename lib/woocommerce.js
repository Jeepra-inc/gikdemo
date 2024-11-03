// lib/woocommerce.js
import axios from 'axios';

// Set up axios instance with WooCommerce credentials
const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_WC_API_URL,
	auth: {
		username: process.env.NEXT_PUBLIC_WC_CONSUMER_KEY,
		password: process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET,
	},
});

// Fetch a limited number of products
export const fetchProducts = async () => {
	const response = await api.get('/products', {
		params: { per_page: 10 },
	});
	return response.data;
};

// Fetch a single product by ID
export const fetchProductById = async (id) => {
	const response = await api.get(`/products/${id}`);
	return response.data;
};

// Fetch product categories
export const fetchCategories = async () => {
	const response = await api.get('/products/categories');
	return response.data;
};
