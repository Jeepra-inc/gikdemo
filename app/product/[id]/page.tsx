// app/product/[id]/page.tsx
'use client';

import { useCart } from '../../../context/CartContext';
import { fetchProductById } from '../../../lib/woocommerce';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProductPage({ params: paramsPromise }) {
	const { addToCart } = useCart();
	const router = useRouter();
	const [product, setProduct] = useState(null);
	const [params, setParams] = useState(null);

	useEffect(() => {
		async function loadParams() {
			const resolvedParams = await paramsPromise;
			setParams(resolvedParams);
		}

		loadParams();
	}, [paramsPromise]);

	useEffect(() => {
		async function loadProduct() {
			if (params?.id) {
				try {
					const fetchedProduct = await fetchProductById(params.id);
					setProduct(fetchedProduct);
				} catch (error) {
					console.error('Error fetching product:', error);
					router.push('/404'); // Redirect to a 404 page if the product is not found
				}
			}
		}

		loadProduct();
	}, [params, router]);

	if (!product) {
		return <p>Loading...</p>;
	}

	return (
		<div>
			<h1>{product.name}</h1>
			<p>{product.price} €</p>
			{/* <div dangerouslySetInnerHTML={{ __html: product.description }} /> */}
			<button onClick={() => addToCart(product)}>Add to Cart</button>
		</div>
	);
}
