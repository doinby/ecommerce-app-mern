import { useParams } from 'react-router';
import products from '../products.js';
import Rating from '../components/Rating.jsx';

export default function Product() {
	const { id } = useParams();
	const product = products.find(({ _id }) => _id === id);
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
	} = product;

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
