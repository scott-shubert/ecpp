function Arrow() {
	return (
		<div className='absolute left-4 top-1/2 w-8 h-8 pl-[9px] pt-[7px] bg-white rounded-full'>
			<svg
				transform='scale(-1,-1)'
				width='13'
				height='18'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='m2 1 8 8-8 8'
					stroke='#1D2026'
					strokeWidth='3'
					fill='none'
					fillRule='evenodd'
				/>
			</svg>
		</div>
	);
}

export default Arrow;
