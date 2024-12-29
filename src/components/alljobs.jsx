import React from 'react';
import { Link } from 'react-router-dom';
const Alljobs = () => {
	return (
		<section className='m-auto max-w-lg my-10 px-6'>
			<Link
				to='/jobs'
				className='block bg-yellow-400 text-black text-center py-4 px-6 rounded-xl hover:bg-indigo-700 hover:text-white'
			>
				View All Jobs
			</Link>
		</section>
	);
};

export default Alljobs;
