import Image from 'next/image';

interface FeatureCardProps {
	title: string;
	imageSrc: string;
	imageAlt: string;
	description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
	title,
	imageSrc,
	imageAlt,
	description,
}) => (
	<div className="w-full sm:w-[calc(100%/3-0.5em)] px-4 py-8 bg-white shadow-lg">
		<h2 className="text-center text-2xl text-green-500 font-semibold mb-4">
			{title}
		</h2>
		<Image
			src={imageSrc}
			alt={imageAlt}
			width={200}
			height={200}
			className="mx-auto mb-4"
		/>
		<p className="text-gray-700 text-sm sm:text-1xl leading-7">{description}</p>
	</div>
);

export default FeatureCard;
