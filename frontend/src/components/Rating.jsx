import { IconContext } from 'react-icons';
import { MdOutlineStar, MdOutlineStarHalf } from 'react-icons/md';

export default function Rating({ rating }) {
	// Convert rating to whole number
	const starCount = Math.floor(rating);

	if (starCount <= 0) {
		return <MdOutlineStarHalf />;
	}

	// Check if rating has decimal (i.e: 2.5)
	// Add half star to star array if has decimal
	const hasDecimal = rating % 1 != 0;
	let starArr = hasDecimal ? [<MdOutlineStarHalf key='half' />] : [];

	// Draw stars equal to rating number
	for (let i = 0; i < starCount; i++) {
		starArr = [<MdOutlineStar key={i} />, ...starArr];
	}

	return (
		<IconContext.Provider value={{ color: 'oklch(76.9% 0.188 70.08)' }}>
			<div className='flex'>{starArr}</div>
		</IconContext.Provider>
	);
}
