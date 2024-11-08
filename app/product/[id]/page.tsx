// app/product/[id]/page.tsx
'use client';

import { fetchProductById } from '../../../lib/woocommerce';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Product {
	id: number;
	name: string;
	price: string;
	description: string;
	images: { src: string; alt?: string }[];
}

export default function ProductPage(props: {
	params: Promise<{ id: string }>;
}) {
	const router = useRouter();
	const [product, setProduct] = useState<Product | null>(null);

	useEffect(() => {
		async function loadProduct() {
			try {
				const resolvedParams = await props.params; // Await params
				const fetchedProduct = await fetchProductById(resolvedParams.id);
				setProduct(fetchedProduct);
			} catch (error) {
				console.error('Error fetching product:', error);
				router.push('/404');
			}
		}

		loadProduct();
	}, [props.params, router]);

	if (!product) {
		return <p>Loading...</p>;
	}

	return (
		<div>
			<h1>{product.name}</h1>
			<p>{product.price} €</p>
			<div dangerouslySetInnerHTML={{ __html: product.description }} />
			{product.images && product.images.length > 0 && (
				<Image
					src={product.images[0].src}
					alt={product.images[0].alt || product.name}
					width={300}
					height={300}
				/>
			)}
		</div>
	);
}
