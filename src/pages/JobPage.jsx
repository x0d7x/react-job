import React from 'react';
import { FaArrowLeft, FaLocationArrow } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useLoaderData, useParams } from 'react-router-dom';
const JobPage = ({ deleteJob }) => {
	const { id } = useParams();
	const job = useLoaderData();
	const navigate = useNavigate();
	const onDeleteJob = (jobId) => {
		const confirm = window.confirm('you sure about this ? ');
		if (!confirm) return;
		deleteJob(jobId);
		navigate('/jobs');
	};
	return (
		<>
			<section className='dark:bg-black'>
				<div className='container m-auto py-6 px-6'>
					<Link
						to='/jobs'
						className='text-indigo-500 hover:text-indigo-600 flex items-center'
					>
						<FaArrowLeft className='mr-2' /> Go Back
					</Link>
				</div>
			</section>
			<section className='bg-indigo-50 dark:bg-black'>
				<div className='container m-auto py-10 px-6'>
					<div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
						<main>
							<div className='dark:bg-black dark:border-2 dark:border-white bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
								<div className='text-gray-500 mb-4'>
									{job.type}
								</div>
								<h1 className='text-3xl font-bold mb-4 dark:text-white'>
									{job?.title}
								</h1>
								<div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start'>
									<FaLocationArrow className='mr-1' />
									<p className='text-orange-700'>
										{job.location}
									</p>
								</div>
							</div>

							<div className='dark:bg-black dark:border-2 dark:border-white dark:text-white bg-white p-6 rounded-lg shadow-md mt-6'>
								<h3 className='text-indigo-500 text-lg font-bold mb-6'>
									Job Description
								</h3>

								<p className='mb-4'>{job.description}</p>

								<h3 className='text-indigo-500 text-lg font-bold mb-2'>
									Salary
								</h3>

								<p className='mb-4'>{job.salary} / Year</p>
							</div>
						</main>

						<aside>
							<div className='bg-white p-6 dark:bg-black dark:border-2 dark:border-white rounded-lg shadow-md'>
								<h3 className='text-xl font-bold mb-6 dark:text-indigo-500'>
									Company Info
								</h3>

								<h2 className='text-2xl dark:text-indigo-400'>
									{job.company.name}
								</h2>

								<p className='my-2 dark:text-white'>
									{job.company.description}
								</p>

								<hr className='my-4' />

								<h3 className='text-xl dark:text-indigo-400'>
									Contact Email:
								</h3>

								<p className='my-2 bg-indigo-100 p-2 font-bold'>
									{job.company.contactEmail}
								</p>

								<h3 className='text-xl dark:text-indigo-400'>
									Contact Phone:
								</h3>

								<p className='my-2 bg-indigo-100 p-2 font-bold'>
									{job.company.contactPhone}
								</p>
							</div>

							<div className='bg-white p-6 rounded-lg shadow-md mt-6 dark:text-indigo-400 dark:bg-black dark:border-2 dark:border-white'>
								<h3 className='text-xl font-bold mb-6'>
									Manage Job
								</h3>
								<Link
									to={`/edit-Job/${job.id}`}
									className='bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
								>
									Edit Job
								</Link>
								<button
									onClick={() => onDeleteJob(job.id)}
									className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
								>
									Delete Job
								</button>
							</div>
						</aside>
					</div>
				</div>
			</section>
		</>
	);
};
const jobLoader = async ({ params }) => {
	const res = await fetch(
		`${import.meta.env.VITE_BACKEND}/${params.id}`,
	);
	const data = await res.json();
	return data;
};
export { jobLoader, JobPage as default };
