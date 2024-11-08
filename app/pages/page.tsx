// app/product/page.tsx
import { fetchProducts } from '../../lib/woocommerce';
import Image from 'next/image';

interface Product {
	id: number;
	name: string;
	price: string;
	images: { src: string; alt?: string }[];
}

export default async function HomePage() {
	const products: Product[] = await fetchProducts();

	return (
		<div>
			<h1>Products</h1>
			<ul>
				{products.map((product: Product) => (
					<li key={product.id}>
						<a href={`/product/${product.id}`}>
							{/* Use Next.js Image component */}
							{product.images && product.images.length > 0 && (
								<Image
									src={product.images[0].src}
									alt={product.images[0].alt || product.name}
									width={150}
									height={150}
								/>
							)}
							<h2>{product.name}</h2>
						</a>
						<p>{product.price} €</p>
					</li>
				))}
			</ul>
		</div>
	);
}
