import { NavLink } from 'react-router';

export default function Header() {
	return (
		<header className='w-full px-8 py-4 flex justify-between bg-slate-700 text-white'>
			<NavLink to='/' end>
				Logo
			</NavLink>

			<nav className='flex gap-6'>
				<NavLink to='/cart' end>
					Cart
				</NavLink>
				<NavLink to='/login' end>
					Log In
				</NavLink>
			</nav>
		</header>
	);
}
