import Header from './components/Header';
import { Routes, Route, BrowserRouter } from 'react-router';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';

export default function App() {
	return (
		<>
			<Header />
			<Routes>
				{/* <Route path='login' element={} /> */}
				<Route index element={<Home />} />
				<Route path='cart' element={<Cart />} />
				<Route path='login' element={<Login />} />
			</Routes>
		</>
	);
}
