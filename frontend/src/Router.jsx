import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router';
import App from './App';
import Home from './pages/Home';
import Product from './pages/Product';
import Login from './pages/Login';
import Cart from './pages/Cart';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route index path='/' element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/cart' element={<Cart />} />
			<Route path='/:category/:id' element={<Product />} />
		</Route>
	)
);

export default router;
