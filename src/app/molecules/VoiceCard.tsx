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
		<h2 className="text-center text-xl font-semibold mt-8">{title}</h2>
		<Image
			src={imageSrc}
			alt={imageAlt}
			width={400}
			height={400}
			className="mx-auto my-10 rounded-lg"
		/>
		<p className="mb-4 font-extrabold text-center">{name}</p>
		<p className="text-gray-700 text-sm sm:text-1xl leading-7">{description}</p>
	</div>
);

export default VoiceCard;
