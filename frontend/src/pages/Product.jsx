import { useParams } from 'react-router';
import Rating from '../components/Rating.jsx';
import { useQuery } from '@tanstack/react-query';

export default function Product() {
	const { id } = useParams();
	const URL = `${import.meta.env.VITE_BASE_URL}/api/products/${id}`;

	const { isPending, error, data } = useQuery({
		queryKey: [],
		queryFn: () => fetch(URL).then((res) => res.json()),
	});

	if (isPending) return 'Loading...';

	if (error) return 'Error...';

	const {
		name,
		image,
		description,
		// brand,
		// category,
		price,
		countInStock,
		rating,
		numReviews,
	} = data;

	const hasStock = countInStock >= 0;
	const stockStatus = hasStock ? 'In Stock' : 'Out of Stock';

	return (
		<>
			<p>Go Back</p>
			<section className='grid grid-cols-3 gap-12'>
				<img className='' src={image} />
				<article className='space-y-2'>
					<h3 className='text-2xl font-bold'>{name}</h3>
					<div className='flex gap-4 items-center'>
						<Rating rating={rating} />
						<p className='text-sm'>{`${numReviews} Reviews`}</p>
					</div>
					<p className='mt-10'>{description}</p>
				</article>
				<article>
					<p>{`$ ${price}`}</p>
					<p className={`${hasStock ? 'text-black' : 'text-gray-400'}`}>
						{stockStatus}
					</p>
					{hasStock ? (
						<button className='px-3 py-2 rounded-sm bg-indigo-500 text-white'>
							Add to Cart
						</button>
					) : (
						<button className='px-3 py-2 rounded-sm bg-amber-500'>
							Notify Me
						</button>
					)}
				</article>
			</section>
		</>
	);
}
