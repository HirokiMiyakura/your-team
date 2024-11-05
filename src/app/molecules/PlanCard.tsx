import { Plan } from '@/data/planData';

interface PlanCardProps {
	plan: Plan;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan }) => (
	<div className="w-full sm:w-[calc(100%/3-0.5em)] shadow bg-white rounded-lg mb-4 sm:mb-0">
		<h2
			className={`p-4 ${plan.bgColor} text-white text-lg font-extrabold text-center`}
		>
			{plan.title}
		</h2>
		<p className="px-4 pt-8 text-center font-extrabold">
			月額{' '}
			<span className={`px-1 text-5xl ${plan.textColor}`}>{plan.price}</span>円
		</p>
		<p className="px-4 text-center">（{plan.priceTaxIncluded}）</p>
		<p className="text-sm sm:text-1xl p-4">{plan.description}</p>
		<div className="p-4">
			<h3 className="font-extrabold border-b-2 pb-2 mb-4">搭載ページ</h3>
			<ul className="text-gray-800">
				{plan.pages.map((page) => (
					<li key={page.name} className="text-sm leading-6">
						{page.name} <span className="float-right">{page.count}</span>
					</li>
				))}
			</ul>
			<h3 className="font-extrabold mt-4 border-b-2 pb-2 mb-4">搭載機能</h3>
			<ul className="text-gray-800">
				{plan.features.map((feature, index) => (
					<li key={index} className="text-sm leading-6">
						{feature}
					</li>
				))}
			</ul>
			<h3 className="font-extrabold mt-4 border-b-2 pb-2 mb-4">
				フリーサービス
			</h3>
			<ul className="text-gray-800">
				{plan.freeServices.map((service, index) => (
					<li key={index} className="text-sm leading-6">
						{service}
					</li>
				))}
			</ul>
		</div>
	</div>
);

export default PlanCard;
