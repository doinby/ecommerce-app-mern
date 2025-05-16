import products from '../public/products';
import Product from './components/Product';

export default function App() {
	return (
		<>
			{products.map((product) => (
				<Product key={product._id} product={product} />
			))}
		</>
	);
}
