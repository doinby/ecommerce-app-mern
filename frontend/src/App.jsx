import Header from './components/Header';
import Product from './components/Product';
import { Routes, Route } from 'react-router';

export default function App() {
	return (
		<>
			<Routes>
				<Route path='login' element={} />
			</Routes>
			<Header />
			<main className='mx-[5%] flex flex-col justify-center align-center'>
				<Product />
			</main>
		</>
	);
}
