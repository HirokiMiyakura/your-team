import Image from 'next/image';
import FooterMenuList from '../organisms/FooterMenuList';

const Footer: React.FC = () => (
	<footer className="block sm:flex sm:max-w-7xl mx-auto justify-between px-4 py-5 my-20 items-center">
		<h1 className="text-center mx-auto">
			<Image
				className="text-center mx-auto"
				src="/logo_yourteam.svg"
				alt="ロゴ"
				width={180}
				height={180}
			/>
		</h1>
		<nav>
			<ul className="block sm:flex gap-x-8 list-unstyled">
				<FooterMenuList />
			</ul>
		</nav>
		<span className="hidden  bg-green-600 bg-yellow-500 bg-blue-600 text-green-600 text-yellow-500 text-blue-600"></span>
	</footer>
);

export default Footer;
