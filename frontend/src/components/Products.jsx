import { useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard.jsx';

export default function Products() {
	const URL = `${import.meta.env.VITE_BASE_URL}/api/products`;

	const { isPending, error, data } = useQuery({
		queryKey: [],
		queryFn: () => fetch(URL).then((res) => res.json()),
	});

	if (isPending) return 'Loading...';

	if (error) return 'Error...';

	return (
		<section id='latest-products'>
			<h2 className='text-2xl'>Latest Products</h2>
			<div className='flex flex-wrap gap-6 justify-center'>
				{data.map((product) => (
					<ProductCard key={product._id} product={product} />
				))}
			</div>
		</section>
	);
}
