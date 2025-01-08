import React from 'react';
import { useEffect, useState } from 'react';
import Jobcard from './Jobcard.jsx';
import Spiner from './Spiner.jsx';
const Joblist = ({ isHome = false }) => {
	const [loading, setloding] = useState(true);
	const [jobs, setjobs] = useState([]);
	useEffect(() => {
		const fetchjobs = async () => {
			const apiurl = isHome
				? `${import.meta.env.VITE_BACKEND}?_limit=3`
				: `${import.meta.env.VITE_BACKEND}`;
			try {
				const res = await fetch(apiurl);
				const data = await res.json();
				setjobs(data);
			} catch (error) {
				console.error('error Fetcching data', error);
			} finally {
				setloding(false);
			}
		};
		fetchjobs();
	}, []);
	return (
		<section className='bg-blue-50 px-4 py-10 dark:bg-black'>
			<div className='container-xl lg:container m-auto'>
				<h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
					{isHome ? 'Recent Jobs' : 'Browse Jobs'}
				</h2>
				{loading ? <Spiner loding={loading} /> : (
					<>
						<div className='motion-opacity-in-0 motion-translate-y-in-25 motion-ease-in grid grid-cols-1 md:grid-cols-3 gap-6'>
							{jobs.map((job) => (
								<Jobcard key={job?.id} job={job} />
							))}
						</div>
					</>
				)}
			</div>
		</section>
	);
};

export default Joblist;
