export const Calendar: React.FC = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		{...props}
	>
		<path d='M8 2v4' />
		<path d='M16 2v4' />
		<rect width='18' height='18' x='3' y='4' rx='2' />
		<path d='M3 10h18' />
		<path d='M8 14h.01' />
		<path d='M12 14h.01' />
		<path d='M16 14h.01' />
		<path d='M8 18h.01' />
		<path d='M12 18h.01' />
		<path d='M16 18h.01' />
	</svg>
);