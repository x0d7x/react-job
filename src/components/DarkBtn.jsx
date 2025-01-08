import React from 'react';
import { useEffect, useState } from 'react';

const DarkBtn = () => {
	const [darkMode, setDarkMode] = useState('light');
	useEffect(() => {
		if (darkMode === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [darkMode]);
	const toggleDark = () => {
		setDarkMode(darkMode === 'dark' ? 'light' : 'dark');
	};
	return (
		<button
			onClick={toggleDark}
			className='motion-opacity-in-0 motion-translate-y-in-25 motion-blur-in-md  hover:motion-preset-confetti dark:border-indigo-700 px-2 py-2 border-2 border-indigo-300 rounded-full text-white'
		>
			{darkMode === 'dark' ? 'Light' : 'Dark'} Mode 🌙
		</button>
	);
};

export default DarkBtn;
