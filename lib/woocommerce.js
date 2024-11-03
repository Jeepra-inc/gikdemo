// lib/woocommerce.js
import axios from 'axios';

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_WC_API_URL,
	auth: {
		username: process.env.NEXT_PUBLIC_WC_CONSUMER_KEY,
		password: process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET,
	},
});

export const fetchProducts = async () => {
	const response = await api.get('/products', {
		params: {
			per_page: 10, // Limit the number of products fetched if necessary
		},
	});
	return response.data;
};

export const fetchProductById = async (id) => {
	const response = await api.get(`/products/${id}`);
	return response.data;
};

export const fetchCategories = async () => {
	const response = await api.get('/products/categories');
	return response.data;
};
