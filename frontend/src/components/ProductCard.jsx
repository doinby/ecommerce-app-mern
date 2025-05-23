import { Link } from 'react-router';
import Rating from './Rating';

export default function ProductCard({ product }) {
	const {
		_id,
		name,
		image,
		// description,
		// brand,
		category,
		price,
		// countInStock,
		rating,
		numReviews,
	} = product;

	const categoryParam = category.replace(/\s+/g, '-').toLowerCase();

	return (
		<Link
			to={`/${categoryParam}/${_id}`}
			className='w-48 p-2 space-y-3.5 rounded-sm border-1 border-slate-300'
		>
			<img className='' src={image} />
			<p>{name}</p>
			<div className='flex justify-between items-center'>
				<Rating rating={rating} />
				<p className='text-sm'>{`${numReviews} Reviews`}</p>
			</div>
			<p>${price}</p>
		</Link>
	);
}
