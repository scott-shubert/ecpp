import { useState } from 'react'
import { Product } from '../App'
import ArrowLeft from './icons/ArrowLeft'
import ArrowRight from './icons/ArrowRight'

function ProductImages({ product }: { product: Product }) {
	const [activeIndex, setActiveIndex] = useState(0)

	const handleClickLeft = () => {
		if (activeIndex === 0) {
			setActiveIndex(product.thumbnails.length - 1)
		} else {
			setActiveIndex(activeIndex - 1)
		}
	}

	const handleClickRight = () => {
		if (activeIndex === product.thumbnails.length - 1) {
			setActiveIndex(0)
		} else {
			setActiveIndex(activeIndex + 1)
		}
	}

	return (
		<div className='md:max-w-[600px] justify-self-end'>
			<div className='relative'>
				<img src={product.images[activeIndex]} className='md:rounded-lg' />
				<button className='md:hidden' onClick={handleClickLeft}>
					<ArrowLeft />
				</button>
				<button className='md:hidden' onClick={handleClickRight}>
					<ArrowRight />
				</button>
			</div>
			<div className='flex justify-between mt-6 gap-4 max-md:hidden'>
				{product.thumbnails.map((thumbnail, i) => {
					return (
						<div
							key={i}
							className={
								i === activeIndex
									? 'rounded-lg border-2 border-orange-400'
									: 'rounded-lg border-2 border-white'
							}
						>
							<img
								src={thumbnail}
								className='rounded-md hover:opacity-50'
								onClick={() => setActiveIndex(i)}
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default ProductImages
