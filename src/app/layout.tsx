import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';

// Noto Sans JP フォントをインスタンス化
const notoSansJP = Noto_Sans_JP({
	subsets: ['latin'], // 必要に応じてsubsetsを指定
	weight: ['400', '700'], // 使用したいフォントウェイトを選択
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'YOUR TEAM | 月額制サッカークラブHP制作',
	description: '全国のサッカークラブを応援します',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={notoSansJP.className}>{children}</body>
		</html>
	);
}
