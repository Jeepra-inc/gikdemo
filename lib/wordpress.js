// lib/wordpress.js
import axios from 'axios';

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_WP_API_URL,
});

export const fetchPages = async () => {
	try {
		const response = await api.get('/pages');
		return response.data;
	} catch (error) {
		console.error('Error fetching pages:', error);
		return [];
	}
};

export const fetchPosts = async () => {
	try {
		const response = await api.get('/posts');
		return response.data;
	} catch (error) {
		console.error('Error fetching posts:', error);
		return [];
	}
};

// lib/wordpress.js
export const fetchPostBySlug = async (slug) => {
	try {
		const response = await api.get(`/posts`, {
			params: {
				slug, // Fetch post by slug
			},
		});
		return response.data.length ? response.data[0] : null; // Return the first match
	} catch (error) {
		console.error(`Error fetching post with slug "${slug}":`, error);
		return null;
	}
};
