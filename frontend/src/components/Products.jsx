import products from '../../public/products.js';
import ProductCard from './ProductCard.jsx';

export default function Products() {
	return (
		<section id='latest-products'>
			<h2 className='text-2xl'>Latest Products</h2>
			<div className='flex flex-wrap gap-6 justify-center'>
				{products.map((product) => (
					<ProductCard key={product._id} product={product} />
				))}
			</div>
		</section>
	);
}
