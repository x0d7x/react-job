import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar.jsx';
// import { ToastContainer } from 'react-toastify';
const MainLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			{/* <ToastContainer /> */}
		</>
	);
};

export default MainLayout;
