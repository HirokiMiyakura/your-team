type TwoColumnsWrapperProps = {
	children: React.ReactNode;
};

export default function TwoColumnsWrapper({
	children,
}: TwoColumnsWrapperProps) {
	return (
		<section className="flex flex-wrap justify-between gap-y-10">
			{children}
		</section>
	);
}
