export default function ProductCard({ product }) {
	const {
		name,
		image,
		// description,
		// brand,
		// category,
		price,
		// countInStock,
		// rating,
		// numReviews,
	} = product;

	return (
		<article className='w-48 p-2 rounded-sm border-1 border-slate-300'>
			<p>{name}</p>
			<img className='' src={image} />
			<p>${price}</p>
		</article>
	);
}
