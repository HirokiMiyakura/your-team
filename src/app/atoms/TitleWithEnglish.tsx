// Props の型定義
interface TitleWithEnglishProps {
	japanese: string;
	english: string;
}

const TitleWithEnglish: React.FC<TitleWithEnglishProps> = ({
	japanese,
	english,
}) => {
	return (
		<div className="text-center mb-20">
			{/* 英語のタイトル */}
			<p className="italic text-normal text-green-500 uppercase tracking-wide mb-2">
				{english}
			</p>
			{/* 日本語のタイトル */}
			<h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4">
				{japanese}
			</h1>
		</div>
	);
};

export default TitleWithEnglish;
