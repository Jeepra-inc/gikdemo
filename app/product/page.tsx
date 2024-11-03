// app/product/page.tsx
import { fetchProducts } from '../../lib/woocommerce';

interface Product {
	id: number;
	name: string;
	price: string;
	images: { src: string; alt?: string }[];
}

export default async function HomePage() {
	const products = (await fetchProducts()) as Product[]; // Ensure products is explicitly cast as Product[]

	return (
		<div>
			<h1>Productssss</h1>
			<ul>
				{products.map(
					(
						product: Product // Explicitly type product as Product
					) => (
						<li key={product.id}>
							<a href={`/product/${product.id}`}>
								{/* Display the featured image if available */}
								{product.images && product.images.length > 0 && (
									<img
										src={product.images[0].src}
										alt={product.images[0].alt || product.name}
										style={{ width: '150px', height: 'auto' }}
									/>
								)}
								<h2>{product.name}</h2>
							</a>
							<p>{product.price} €</p>
						</li>
					)
				)}
			</ul>
		</div>
	);
}
