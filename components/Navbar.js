// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
	return (
		<nav style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
			<ul
				style={{
					display: 'flex',
					gap: '15px',
					listStyle: 'none',
					margin: 0,
					padding: 0,
				}}
			>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/cart'>Cart</Link>
				</li>
				<li>
					<Link href='/pages'>Pages</Link>
				</li>
				<li>
					<Link href='/posts'>Posts</Link>
				</li>
			</ul>
		</nav>
	);
}
