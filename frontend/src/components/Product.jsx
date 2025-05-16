export default function Product({ product }) {
	const {
		name,
		image,
		description,
		brand,
		category,
		price,
		countInStock,
		rating,
		numReviews,
	} = product;

	// const { image } = product;

	return (
		<div className='w-48'>
			<p>{name}</p>
			<img src={image} />
		</div>
	);
}
