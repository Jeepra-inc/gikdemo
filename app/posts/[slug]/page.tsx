// app/posts/[slug]/page.tsx
import { fetchPostBySlug } from '../../../lib/wordpress';

export default async function PostPage({ params }) {
	const post = await fetchPostBySlug(params.slug); // Fetch post by slug

	// If no post is found, return a "Post not found" message
	if (!post) return <p>Post not found.</p>;

	// Return JSON data for debugging
	return (
		<>
			<h1>{post.title.rendered}</h1>
			<p className='border p-8'>{post.excerpt.rendered}</p>
			<div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

			{/* <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
	{JSON.stringify(post, null, 2)}
</pre> */}
		</>
	);
}
