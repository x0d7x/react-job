import React from 'react';
import Hero from '../components/Hero.jsx';
import HomeCards from '../components/homeCard.jsx';
import Joblist from '../components/joblist.jsx';
import Alljobs from '../components/alljobs.jsx';
const HomePage = () => {
	return (
		<>
			<Hero />
			<HomeCards />
			<Joblist isHome={true} />
			<Alljobs />
		</>
	);
};

export default HomePage;
