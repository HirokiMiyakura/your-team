'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './Header.module.css';
import MenuList from '@/app/organisms/MenuList';
import Link from 'next/link';

const Header: React.FC = () => {
	const [open, setOpen] = useState(false);
	const pathname = usePathname(); // 現在のパスを取得

	const toggleMenu = () => setOpen((prev) => !prev);

	// パスが変更されたときにメニューを閉じる
	useEffect(() => {
		setOpen(false); // パスが変更されたらメニューを閉じる
	}, [pathname]);

	return (
		<>
			<header className="fixed z-50 w-full bg-white opacity-90 top-0">
				<div className="flex sm:max-w-7xl mx-auto justify-between items-center px-4 sm:px-0">
					<h1>
						<Link href="/">
							<Image
								className="hidden sm:block"
								src="/logo_yourteam.svg"
								alt="ロゴ"
								width={180}
								height={180}
							/>
							<Image
								className="sm:hidden"
								src="/logo_yourteam.svg"
								alt="ロゴ"
								width={90}
								height={180}
							/>
						</Link>
					</h1>

					{/* ハンバーガーボタン（モバイル用） */}
					<button
						onClick={toggleMenu}
						className={`md:hidden ${styles.hamburger}`}
					>
						<span
							className={`${styles.line} ${open ? styles.open : ''}`}
						></span>
					</button>

					{/* デスクトップ用メニュー */}
					<nav className={`hidden list-none items-center space-x-8 lg:flex`}>
						<MenuList className="font-extrabold" />
					</nav>
				</div>
			</header>

			{/* モバイルフルスクリーンメニュー */}
			{open && (
				<div className={styles.overlay}>
					<button className={`${styles.closeButton}`} onClick={toggleMenu}>
						✕
					</button>
					<MenuList className="mb-10 flex flex-col items-center gap-8 text-2xl text-white" />
				</div>
			)}
		</>
	);
};

export default Header;
