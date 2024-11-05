'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
	const form = useRef<HTMLFormElement | null>(null);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const sendEmail = (e: React.FormEvent) => {
		e.preventDefault();

		if (!form.current) return;

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
				form.current,
				process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ''
			)
			.then(
				(result) => {
					console.log(result.text);
					setIsSubmitted(true); // 送信成功時の状態変更
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
			{isSubmitted ? (
				<p className="text-center text-green-500 font-bold">
					お問い合わせありがとうございます。送信されました。
				</p>
			) : (
				<form ref={form} onSubmit={sendEmail} className="space-y-4">
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-extrabold text-gray-700 mb-4"
						>
							お名前
						</label>
						<input
							type="text"
							name="user_name"
							id="name"
							required
							className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
						/>
					</div>
					<div>
						<label
							htmlFor="phone"
							className="block text-sm font-extrabold text-gray-700 mb-4"
						>
							電話番号
						</label>
						<input
							type="tel"
							name="user_phone"
							id="phone"
							required
							pattern="^[0-9-+\s()]*$"
							className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
							placeholder="例: 090-1234-5678"
						/>
					</div>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-extrabold text-gray-700 mb-4"
						>
							メールアドレス
						</label>
						<input
							type="email"
							name="user_email"
							id="email"
							className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
						/>
					</div>
					<div>
						<label
							htmlFor="message"
							className="block text-sm font-extrabold text-gray-700 mb-4"
						>
							お問い合わせ内容
						</label>
						<textarea
							name="message"
							id="message"
							required
							className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
							rows={4}
						></textarea>
					</div>
					<button
						type="submit"
						className="w-full py-4 bg-gradient-to-r from-yellow-400 to-red-500 hover:bg-blue-600 hover:from-blue-500 hover:to-green-400 transform hover:scale-105 transition duration-300 ease-in-out text-white font-extrabold rounded-lg text-lg"
					>
						送信
					</button>
				</form>
			)}
		</div>
	);
};

export default ContactForm;
