import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import UserLayoutSub from './layouts/userLayoutSub';
import UserLayoutMain from './layouts/userLayoutMain';

// Guide
import GuidePages from "./guide/ia/guidePages";
import FrontPages from "./guide/ia/frontPages";

// Pages
import Main from "./pages/main";
import Prototype from "./pages/prototype";
import NotFound from "./NotFound";

const Router = () => {
	return (
		<BrowserRouter basename="/hysung-hbs-publising">
			<Routes>
				<Route path="/" element={<GuidePages />} />
				<Route path="frontPages" element={<FrontPages />} />

				<Route path="main" element={<UserLayoutMain />}>
					<Route index element={<Main />} />
				</Route>
				<Route path="pages/" element={<UserLayoutSub />}>
					<Route path='prototype' element={<Prototype />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};
export default Router;