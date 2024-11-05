import Image from 'next/image';

interface VoiceCardProps {
	title: string;
	imageSrc: string;
	imageAlt: string;
	name: string;
	description: string;
}

const VoiceCard: React.FC<VoiceCardProps> = ({
	title,
	imageSrc,
	imageAlt,
	name,
	description,
}) => (
	<div className="w-full sm:w-[calc(100%/3-0.5em)] px-4 py-8 bg-white shadow-lg">
		<h2 className="text-center text-xl font-semibold mt-8 mb-4">{title}</h2>
		<Image
			src={imageSrc}
			alt={imageAlt}
			width={200}
			height={200}
			className="mx-auto mb-4"
		/>
		<p className="mb-4 font-extrabold text-center">{name}</p>
		<p className="text-gray-700 text-sm sm:text-1xl leading-7">{description}</p>
	</div>
);

export default VoiceCard;
