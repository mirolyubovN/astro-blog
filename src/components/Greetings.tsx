import { useState } from 'react';

export default function Greeting({ messages }: { messages: string[] }) {

	const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

	const [greeting, setGreeting] = useState(messages[0]);

	return (
		<div>
			<h3>{greeting}! Thank you for visiting!</h3>
			<button className='p-3 my-2 cursor-pointer rounded-2xl bg-slate-400' onClick={() => setGreeting(randomMessage())}>
				New Greeting
			</button>
		</div>
	);
}