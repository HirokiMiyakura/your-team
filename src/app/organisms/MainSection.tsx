import Image from 'next/image';
import ConversionButton from '../atoms/ConversionButton';

const MainSection: React.FC = () => (
	<section className="w-full min-h-[calc(100vh-180px)] bg-[url('/main.jpg')] bg-cover bg-left-top flex items-center justify-center mt-[calc(90px)] sm:mt-[calc(180px)]">
		<div className="px-4 sm:px-0 max-w-7xl mx-auto">
			<div className="max-w-4xl mx-auto text-center">
				<ul className="flex justify-center gap-x-2 sm:gap-x-8 pt-12 sm:pt-0">
					<li className="text-center py-4">
						<Image src="/01.svg" width={140} height={100} alt="point" />
					</li>
					<li className="text-center py-4">
						<Image src="/02.svg" width={140} height={100} alt="point" />
					</li>
					<li className="text-center py-4">
						<Image src="/03.svg" width={140} height={100} alt="point" />
					</li>
				</ul>
				<p className="text-center text-white text-xl sm:text-3xl font-extrabold drop-shadow-lg mt-10">
					サッカーチーム専用
					<br className="sm:hidden leading-9" />
					定額制ホームページ制作サービス
				</p>
				<p className="text-2xl sm:text-5xl text-center font-extrabold mt-10 text-white drop-shadow-lg">
					月額
					<span className="text-6xl sm:text-9xl font-extrabold px-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
						4,980
					</span>
					円から
				</p>
				<p className="italic font-extrabold text-white text-center text-normal">
					（税込5,478円）
				</p>
				<div className="mt-10">
					<ConversionButton targetId="contact" />
				</div>
			</div>
		</div>
	</section>
);

export default MainSection;
