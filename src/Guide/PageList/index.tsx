import React from 'react';
import { NavLink } from 'react-router';

const PageList = () => {
	return (
		<div>
			PageList Area
			<br />
			<NavLink to='/Main/'>Main</NavLink>&nbsp;/&nbsp;
			<NavLink to='/Pages/Prototype'>Prototype</NavLink>
		</div>
	)
}
export default PageList;