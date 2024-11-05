import Link from 'next/link';

type FooterMenuItem = {
	label: string;
	href: string;
};

type FooterMenuListProps = {
	className?: string;
	onClick?: () => void;
};

const menuItems: FooterMenuItem[] = [
	{ label: 'トップ', href: '/' },
	{ label: 'YOUR TEAMとは', href: '#about' },
	{ label: 'YOUR TEAMの特徴', href: '#features' },
	{ label: 'プラン別機能一覧', href: '#plan' },
	{ label: 'お客様の声', href: '#voice' },
	{ label: 'お問い合わせ', href: '#contact' },
];

export default function FooterMenuList({ onClick }: FooterMenuListProps) {
	return (
		<>
			{menuItems.map((item) => (
				<li key={item.href} className="border-b-2">
					<Link
						className="py-3 block w-full"
						href={item.href}
						onClick={onClick}
					>
						{item.label}
					</Link>
				</li>
			))}
		</>
	);
}
