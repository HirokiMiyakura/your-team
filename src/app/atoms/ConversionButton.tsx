'use client';

import React from 'react';

interface ConversionButtonProps {
	label?: string;
	targetId: string; // ページ内リンクのターゲットIDを指定
}

const ConversionButton: React.FC<ConversionButtonProps> = ({
	label = '無料相談はこちらから',
	targetId,
}) => {
	const handleScroll = () => {
		const targetElement = document.getElementById(targetId);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<button
			onClick={handleScroll}
			className="w-full sm:w-auto tracking-widest block mx-auto text-1xl sm:text-3xl px-12 sm:px-40 py-4 sm:py-8 bg-gradient-to-r from-yellow-400 to-red-500 text-white font-extrabold rounded-full shadow-lg hover:from-blue-500 hover:to-green-400 transform hover:scale-105 transition duration-300 ease-in-out mt-10 sm:mt-20 text-center"
		>
			{label}
		</button>
	);
};

export default ConversionButton;
