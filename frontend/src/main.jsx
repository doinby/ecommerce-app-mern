import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
	Routes,
} from 'react-router';
import './index.css';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route index path='/' element={<Home />} />
			<Route path='/:category/:id' element={<Product />} />
		</Route>
	)
);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
