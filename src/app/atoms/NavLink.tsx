// components/atoms/NavLink.tsx
import Link from 'next/link';

interface NavLinkProps {
	href: string;
	children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
	return (
		<li>
			<Link className="font-extrabold" href={href} scroll={false}>
				{children}
			</Link>
		</li>
	);
};

export default NavLink;
