// app/posts/page.tsx
import { fetchPosts } from '../../lib/wordpress';

interface Post {
	id: number;
	title: { rendered: string };
	excerpt: { rendered: string };
	slug: string;
}

export default async function PostsPage() {
	const posts: Post[] = await fetchPosts();

	return (
		<div>
			<h1>WordPress Posts</h1>
			{posts.length === 0 ? (
				<p>No posts found.</p>
			) : (
				<ul>
					{posts.map((post: Post) => (
						<li key={post.id}>
							<h2>{post.title.rendered}</h2>
							<div
								dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
							/>
							<a href={`/posts/${post.slug}`}>Read more</a>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
