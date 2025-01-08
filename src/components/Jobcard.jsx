import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarker } from 'react-icons/fa';
import { useState } from 'react';
const Jobcard = ({ job }) => {
	const [showfullDesc, setFullDesc] = useState(false);
	let desc = job?.description;
	if (!showfullDesc) {
		desc = desc.substring(0, 100) + '...';
	}
	return (
		<div className='dark:bg-black dark:border-2 dark:border-white bg-white rounded-xl shadow-md relative'>
			<div className='p-4'>
				<div className='mb-6'>
					<div className='text-gray-600 my-2'>{job.type}</div>
					<h3 className='dark:text-white text-xl font-bold'>
						{job.title}
					</h3>
				</div>

				<div className='mb-5 dark:text-white'>
					{desc}
					<button
						onClick={() => setFullDesc((prev) => !prev)}
						className=' text-blue-500 rounded-lg text-xl hove:bg-indigo-100'
					>
						{showfullDesc ? ' Read less' : 'Read more'}
					</button>
				</div>

				<h3 className='text-indigo-500 mb-2'>{job.salary} / Year</h3>

				<div className='border border-gray-100 mb-5'></div>

				<div className='flex flex-col lg:flex-row justify-between mb-4'>
					<div className='text-orange-700 mb-3'>
						<FaMapMarker className='inline  mr-1 mb-1 text-lg' />
						{job?.location}
					</div>
					<Link
						to={`/jobs/${job?.id}`}
						className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
					>
						Read More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Jobcard;
