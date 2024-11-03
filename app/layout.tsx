// app/layout.tsx
import './globals.css';
import { CartProvider } from '../context/CartContext';
import Navbar from '../components/Navbar';
import { ReactNode } from 'react';

interface RootLayoutProps {
	children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='en'>
			<body>
				<CartProvider>
					<Navbar />
					{children}
				</CartProvider>
			</body>
		</html>
	);
}
