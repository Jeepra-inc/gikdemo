// app/posts/[slug]/page.tsx
import { fetchPostBySlug } from '../../../lib/wordpress';

export default async function PostPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params; // Await the resolved params to access slug
	const post = await fetchPostBySlug(slug); // Fetch post by slug

	// If no post is found, return a "Post not found" message
	if (!post) return <p>Post not found.</p>;

	return (
		<>
			<h1>{post.title.rendered}</h1>
			<p className='border p-8'>{post.excerpt.rendered}</p>
			<div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
		</>
	);
}
