import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import '../assets/css/import.css';

const IALayout = () => {
	return (
		<div className='g-wrapper ia-wrap'>
			<Header></Header>
			<Outlet />
		</div>
	);
}

export default IALayout;
