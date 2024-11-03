// app/layout.tsx
import './globals.css';
import { CartProvider } from '../context/CartContext';
import Navbar from '../components/Navbar';

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<CartProvider>
					<Navbar /> {/* Navbar will appear on all pages */}
					{children}
				</CartProvider>
			</body>
		</html>
	);
}
