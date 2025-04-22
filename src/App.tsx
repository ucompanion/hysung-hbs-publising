import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import UserLayoutSub from './Layouts/UserLayoutSub';
import UserLayoutMain from './Layouts/UserLayoutMain';

// Guide
import GuidePages from "./Guide/ia/guidePages";
import FrontPages from "./Guide/ia/frontPages";

import PrototypePage from "./Guide/ui/PrototypePage";

// Pages
import Main from "./Pages/Main";
import Prototype from "./Pages/Prototype";
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

				 {/* 새로운 라우트 추가 */}
				 <Route path="/Guide/ui" element={<PrototypePage />} />
				 
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;