import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Guide - IA
import IALayout from "./guide/ia/components/iaLayout";
import FrontList from "./guide/ia/frontList";
import GuideList from "./guide/ia/guideList";

// Guide - UI
import UILayout from "./guide/ui/components/uiLayout";
import PrototypePage from "./guide/ui/prototypePage";

// User Layout
import UserLayoutSub from './components/layouts/userLayoutSub';
import UserLayoutMain from './components/layouts/userLayoutMain';

// User Pages
import Main from "./pages/main";
import Prototype from "./pages/prototype";
import NotFound from "./NotFound";

const Router = () => {
	return (
		<BrowserRouter basename="/hysung-hbs-publising">
			<Routes>
				 {/* Guide Pages */}
				 <Route element={<IALayout />}>
					<Route path='guide/ia/guideList/' element={<GuideList />} />
					<Route path="/" element={<FrontList />} />
				 </Route>
				 <Route path='guide/ui/' element={<UILayout />}>
					<Route path="prototypePage" element={<PrototypePage />} />
				 </Route>

				{/* Main Pages */}
				<Route path="pages/" element={<UserLayoutMain />}>
					<Route path="main" element={<Main />} />
				</Route>

				{/* Sub Pages */}
				<Route path="pages/" element={<UserLayoutSub />}>
					<Route path='prototype' element={<Prototype />} />
				</Route>

				{/* System Pages */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;