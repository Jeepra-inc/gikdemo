// lib/wordpress.js
import axios from 'axios';

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_WP_API_URL,
});

// Fetch all pages
export const fetchPages = async () => {
	try {
		const response = await api.get('/pages');
		return response.data;
	} catch (error) {
		console.error('Error fetching pages:', error);
		return []; // Return an empty array if there’s an error
	}
};

// Fetch all posts
export const fetchPosts = async () => {
	try {
		const response = await api.get('/posts');
		return response.data;
	} catch (error) {
		console.error('Error fetching posts:', error);
		return []; // Return an empty array if there’s an error
	}
};

// Fetch a single post by slug
export const fetchPostBySlug = async (slug) => {
	try {
		const response = await api.get(`/posts`, {
			params: {
				slug, // Find post by slug
			},
		});
		// Return the first match or null if no match found
		return response.data.length ? response.data[0] : null;
	} catch (error) {
		console.error(`Error fetching post with slug "${slug}":`, error);
		return null; // Return null if there’s an error
	}
};
