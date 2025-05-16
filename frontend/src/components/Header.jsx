export default function Header() {
	return (
		<header className='w-full px-8 py-4 flex justify-between bg-slate-700 text-white'>
			<p>Logo</p>

			<nav className='flex gap-6'>
				<button>Cart</button>
				<button>Log in</button>
			</nav>
		</header>
	);
}
