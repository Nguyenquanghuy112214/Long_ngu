
import { Routes, Route } from 'react-router-dom';

import { DefaultLayout } from '~/layouts';
import { LayoutNoNavbar } from '~/layouts';
import { LayoutCenter } from '~/layouts';
import publicRoutes from './routes';
import AOS from 'aos';
import 'aos/dist/aos.css'



AOS.init();


function App() {

	return (

		<div style={{ background: "#e5e5e5" }}>
			<Routes>

				{publicRoutes.map((route, index) => {
					let Layout = DefaultLayout;
					if (route.layout === 'nonavbar') {
						Layout = LayoutNoNavbar;
					}
					else if (route.layout === 'navbarnone') {
						Layout = LayoutCenter;
					}
					let Page = route.component;
					return (
						<Route
							key={index}
							path={route.path}
							element={
								<Layout>
									<Page />
								</Layout>
							}
						/>
					);
				})}
			</Routes>
		</div>
	);
}

export default App;
