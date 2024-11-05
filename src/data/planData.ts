// src/data/planData.ts

export interface Plan {
	title: string;
	price: string;
	priceTaxIncluded: string;
	description: string;
	pages: { name: string; count: string }[];
	features: string[];
	freeServices: string[];
	bgColor: string;
	textColor: string;
}

const planData: Plan[] = [
	{
		title: 'スタートプラン',
		price: '4,980',
		priceTaxIncluded: '税込5,478円',
		description: 'ここにプランの説明文が入ります。',
		pages: [
			{ name: 'トップページ', count: '1P' },
			{ name: 'お知らせ一覧ページ', count: '1P' },
			{ name: '予定表ページ', count: '1P' },
		],
		features: [
			'お知らせ追加機能',
			'お問い合わせフォーム',
			'レスポンシブデザイン（スマホ対応）',
			'サーバー・ドメイン利用料',
			'常時SSL化',
		],
		freeServices: ['LINE相談'],
		bgColor: 'bg-green-600',
		textColor: 'text-green-600',
	},
	{
		title: 'ノーマルプラン',
		price: '9,980',
		priceTaxIncluded: '税込10,978円',
		description: 'ここにプランの説明文が入ります。',
		pages: [
			{ name: 'トップページ', count: '1P' },
			{ name: 'お知らせ一覧ページ', count: '1P' },
			{ name: '予定表ページ', count: '1P' },
			{ name: 'チーム紹介ページ', count: '1P' },
			{ name: 'スタッフ紹介ページ', count: '1P' },
			{ name: '試合結果ページ', count: '1P' },
			{ name: 'アクセスページ', count: '1P' },
			{ name: '選手一覧ページ', count: '1P' },
			{ name: '練習参加申込フォーム', count: '1P' },
		],
		features: [
			'お知らせ追加機能',
			'お問い合わせフォーム',
			'レスポンシブデザイン（スマホ対応）',
			'サーバー・ドメイン利用料',
			'Google Analytics設置',
			'常時SSL化',
		],
		freeServices: ['LINE相談', '文書作成補助'],
		bgColor: 'bg-yellow-500',
		textColor: 'text-yellow-500',
	},
	{
		title: 'プレミアプラン',
		price: '19,980',
		priceTaxIncluded: '税込21,978円',
		description: 'ここにプランの説明文が入ります。',
		pages: [
			{ name: 'トップページ', count: '1P' },
			{ name: 'お知らせ一覧ページ', count: '1P' },
			{ name: '予定表ページ', count: '1P' },
			{ name: 'チーム紹介ページ', count: '1P' },
			{ name: 'スタッフ紹介ページ', count: '1P' },
			{ name: '試合結果ページ', count: '1P' },
			{ name: 'アクセスページ', count: '1P' },
			{ name: '選手一覧ページ', count: '1P' },
			{ name: '練習参加申込フォーム', count: '1P' },
			{ name: 'スポンサー募集ページ', count: '1P' },
			{ name: 'スポンサー紹介ページ', count: '1P' },
			{ name: 'OB・OG紹介ページ', count: '1P' },
		],
		features: [
			'お知らせ追加機能',
			'お問い合わせフォーム',
			'レスポンシブデザイン（スマホ対応）',
			'サーバー・ドメイン利用料',
			'Google Analytics設置',
			'常時SSL化',
		],
		freeServices: ['LINE相談', '文書作成補助', '電話相談'],
		bgColor: 'bg-blue-600',
		textColor: 'text-blue-600',
	},
];

export default planData;