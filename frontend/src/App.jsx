import Header from './components/Header';
import Product from './components/Product';

export default function App() {
	return (
		<>
			<Header />
			<main className='mx-[5%] flex flex-col justify-center align-center'>
				<Product />
			</main>
		</>
	);
}
