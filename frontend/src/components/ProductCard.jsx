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
		// numReviews,
	} = product;

	return (
		<Link
			to={`/${category}/${_id}`}
			className='w-48 p-2 rounded-sm border-1 border-slate-300'
		>
			<p>{name}</p>
			<img className='' src={image} />
			<Rating rating={rating} />
			<p>${price}</p>
		</Link>
	);
}
