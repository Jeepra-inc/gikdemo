// app/posts/page.tsx
import { fetchPosts } from '../../lib/wordpress';

export default async function PostsPage() {
	const posts = await fetchPosts();

	return (
		<div>
			<h1>WordPress Posts</h1>
			{posts.length === 0 ? (
				<p>No posts found.</p>
			) : (
				<ul>
					{posts.map((post) => (
						<li key={post.id}>
							<h2>{post.title.rendered}</h2>
							<div
								dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
							/>
							<a href={`/posts/${post.slug}`}>Read more</a>{' '}
							{/* Use slug instead of ID */}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
