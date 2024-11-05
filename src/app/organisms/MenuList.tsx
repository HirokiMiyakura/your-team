import Link from 'next/link';

type MenuItem = {
	label: string;
	href: string;
};

type MenuListProps = {
	className?: string;
	onClick?: () => void;
};

const menuItems: MenuItem[] = [
	// { label: 'トップ', href: '/' },
	{ label: 'YOUR TEAMとは', href: '#about' },
	{ label: 'YOUR TEAMの特徴', href: '#features' },
	{ label: 'プラン別機能一覧', href: '#plan' },
	{ label: 'お客様の声', href: '#voice' },
	{ label: 'お問い合わせ', href: '#contact' },
];

export default function MenuList({ className = '', onClick }: MenuListProps) {
	return (
		<>
			{menuItems.map((item) => (
				<li key={item.href} className={className}>
					<Link href={item.href} onClick={onClick}>
						{item.label}
					</Link>
				</li>
			))}
		</>
	);
}
