import SectionWrapper from './molecules/SectionWrapper';
import TitleWithEnglish from './atoms/TitleWithEnglish';
import Header from './templates/Header/Header';
import FeatureCard from './molecules/FeatureCard';
import PlanCard from './molecules/PlanCard';
import planData from '@/data/planData';
import Footer from './templates/Footer';
import TwoColumnsWrapper from './molecules/TwoColumnsWrapper';
import MainSection from './organisms/MainSection';
import VoiceCard from './molecules/VoiceCard';

export default function Home() {
	return (
		<>
			<Header />
			<MainSection />
			<SectionWrapper bgColor="bg-green-50">
				<TitleWithEnglish japanese="YOUR TEAMとは" english="ABOUT" />
				<p className="text-sm sm:text-xl my-5 sm:max-w-5xl mx-auto leading-7 sm:leading-10">
					<span className="font-extrabold mb-5 block">
						サッカーチーム専用のホームページを、誰もが気軽に
					</span>
					「YOUR
					TEAM」は、サッカークラブのための特別なホームページ制作サービスです。
					<br />
					<span className="font-extrabold">初期費用無料、月額5,000円から</span>
					というシンプルな料金プランで、クラブ運営に無理なく導入いただけます。
					<br />
					運営資金に限りがあるクラブの方々でも、チームの紹介や活動内容、新規メンバー募集に活用できる、信頼のサービスを提供いたします。あなたのチームに合ったホームページで、地域のサポーターや新しい仲間とつながりましょう。
					<br />
					<span className="font-extrabold block mt-5">
						クラブの夢を、一緒にカタチに。YOUR
						TEAMが、あなたのチームを応援します。
					</span>
				</p>
			</SectionWrapper>
			<SectionWrapper>
				<TitleWithEnglish japanese="YOUR TEAMの特徴" english="FEATURES" />
				<TwoColumnsWrapper>
					<FeatureCard
						title="圧倒的サポート"
						imageSrc="/logo_yourteam.svg"
						imageAlt="特徴1"
						description="「チームの成長を後押しするパートナーとして」。パソコンに不慣れな方でも、わかりやすい言葉と手厚い対応でお手伝いします。チームの運営に安心をプラス。"
					/>
					<FeatureCard
						title="過不足のない充実性能"
						imageSrc="/logo_yourteam.svg"
						imageAlt="特徴1"
						description="「必要な機能を無駄なく、しっかりと」。運営に役立つ機能を厳選。シンプルさと充実性を兼ね備えたホームページが、チーム運営をしっかり支えます。"
					/>
					<FeatureCard
						title="洗練されたデザイン"
						imageSrc="/logo_yourteam.svg"
						imageAlt="特徴1"
						description="「チームの魅力を引き出すデザイン」。シンプルながら目を引くデザインで、チームの魅力を最大限に発信。応援者や新メンバーにも一目で伝わるホームページを提供します。"
					/>
				</TwoColumnsWrapper>
			</SectionWrapper>
			<SectionWrapper bgColor="bg-green-50">
				<TitleWithEnglish japanese="プラン別機能一覧" english="FUNCTIONS" />
				<div className="block sm:flex justify-between">
					{planData.map((plan) => (
						<PlanCard key={plan.title} plan={plan} />
					))}
				</div>
			</SectionWrapper>
			<SectionWrapper>
				<TitleWithEnglish japanese="お客様の声" english="VOICE" />
				<TwoColumnsWrapper>
					<VoiceCard
						title="迅速で的確な対応が心強い！"
						imageSrc="/logo_yourteam.svg"
						imageAlt="特徴1"
						name="Y・A様"
						description="更新の方法も丁寧に教えてもらえて、すぐに運営できました。チームのメンバーや保護者の反応も良く、大満足です。"
					/>
					<VoiceCard
						title="追加料金がないので安心できました！"
						imageSrc="/logo_yourteam.svg"
						imageAlt="特徴1"
						name="Y・A様"
						description="他社では予想外の追加費用がかかることが多かったのですが、YOUR TEAMは見積もりどおりの価格で対応していただきました。"
					/>
					<VoiceCard
						title="新しい仲間が増えました！"
						imageSrc="/logo_yourteam.svg"
						imageAlt="特徴1"
						name="Y・A様"
						description="新しいウェブサイトのおかげでチームの活動が多くの方に届くようになり、地域の応援者が増えました。今後もこの調子で盛り上がりたいと思います！"
					/>
				</TwoColumnsWrapper>
			</SectionWrapper>
			<Footer />
		</>
	);
}
