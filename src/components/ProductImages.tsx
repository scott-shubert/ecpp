import { useState } from 'react';
import { Product } from '../App';
import Arrow from './Arrow';

function ProductImages({ product }: { product: Product }) {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleClick = (i: number) => {
		setActiveIndex(i);
	};

	return (
		<div className='md:max-w-[600px] justify-self-end'>
			<div>
				<img src={product.images[activeIndex]} className='md:rounded-lg' />
				<Arrow />
			</div>
			<div className='flex justify-between mt-6 gap-4 max-md:hidden'>
				{product.thumbnails.map((thumbnail, i) => {
					return (
						<div
							className={
								i === activeIndex ? 'rounded-lg border-2 border-orange-400' : ''
							}
						>
							<img
								key={i}
								src={thumbnail}
								className='rounded-md hover:opacity-50'
								onClick={() => handleClick(i)}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ProductImages;
