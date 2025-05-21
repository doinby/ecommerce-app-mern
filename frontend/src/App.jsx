import Header from './components/Header';
import { Outlet } from 'react-router';

export default function App() {
	return (
		<>
			<Header />
			<main className='mx-[5%] flex flex-col justify-center align-center'>
				<Outlet />
			</main>
		</>
	);
}
