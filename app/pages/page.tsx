// app/pages/page.tsx
import { fetchPages } from '../../lib/wordpress';

export default async function PagesPage() {
	const pages = await fetchPages();

	return (
		<div>
			<h1>WordPress Pages</h1>
			{pages.length === 0 ? (
				<p>No pages found.</p>
			) : (
				<ul>
					{pages.map((page) => (
						<li key={page.id}>
							<h2>{page.title.rendered}</h2>
							<div
								dangerouslySetInnerHTML={{ __html: page.content.rendered }}
							/>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
