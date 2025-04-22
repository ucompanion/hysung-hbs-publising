import React from 'react';
import { Outlet } from 'react-router-dom';

const UILayout = () => {
	return (
		<div className='g-wrapper'>
			<Outlet />
		</div>
	);
}

export default UILayout;
