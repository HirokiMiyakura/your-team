type SectionWrapperProps = {
	children: React.ReactNode;
	id?: string;
	bgColor?: string; // 背景色用のプロパティを追加
};

export default function SectionWrapper({
	children,
	id,
	bgColor = 'bg-white', // デフォルト背景色を指定
}: SectionWrapperProps) {
	return (
		<section id={id} className={`${bgColor}`}>
			<div className="mx-auto w-full sm:max-w-7xl px-4 sm:px-8 py-14 sm:py-28 leading-8">
				{children}
			</div>
		</section>
	);
}
