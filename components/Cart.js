// components/Cart.js
import { useCart } from '../context/CartContext';
import Image from 'next/image';

export default function Cart() {
	const { cart, removeFromCart } = useCart();

	return (
		<div>
			<h2>Shopping Cart</h2>
			{cart.length === 0 ? (
				<p>Your cart is empty</p>
			) : (
				<ul>
					{cart.map((item) => (
						<li
							key={item.id}
							style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}
						>
							<div>
								<h3>{item.name}</h3>
								<p>Price: {item.price} €</p>
								{item.images && item.images.length > 0 && (
									<Image
										src={item.images[0].src}
										alt={item.name}
										width={100}
										height={100}
									/>
								)}
								<button onClick={() => removeFromCart(item.id)}>
									Remove from Cart
								</button>
							</div>
						</li>
					))}
				</ul>
			)}
			<div>
				<h4>Total Items: {cart.length}</h4>
				<p>
					Total Price:{' '}
					{cart
						.reduce((total, item) => total + parseFloat(item.price), 0)
						.toFixed(2)}{' '}
					€
				</p>
			</div>
		</div>
	);
}
