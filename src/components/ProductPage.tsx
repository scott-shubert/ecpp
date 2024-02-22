import { useState } from 'react';
import { Product } from '../App';
import Cart from './icons/Cart';
import Minus from './icons/Minus';
import Plus from './icons/Plus';
import ProductImages from './ProductImages';
import { addToCart } from '../store/cart-slice';
import { useStoreDispatch } from '../store/hooks';
import { currencyUSD, getRetailPrice } from '../utils/CurrencyFormatter';

function ProductPage({ product }: { product: Product }) {
	const dispatch = useStoreDispatch();
	const [quantity, setQuantity] = useState(1);

	const increaseQuantity = () => {
		setQuantity(quantity + 1);
	};

	const decreaseQuantity = () => {
		if (quantity > 0) setQuantity(quantity - 1);
	};

	const handleAddToCart = () => {
		dispatch(addToCart({ product: product, quantity: quantity }));
	};

	return (
		<div className='md:pt-16 md:px-8 grid grid-cols-1 md:grid-cols-2 justify-center h-[900px] gap-4 md:gap-12 lg:gap-24'>
			<ProductImages product={product} />
			<div className='grid md:pt-12 max-h-[600px] max-w-[600px] max-md:px-8'>
				<div className='text-orange-400 uppercase font-bold'>
					Sneaker Company
				</div>
				<div className='text-black font-bold text-3xl lg:text-5xl'>
					{product.name}
				</div>
				<div className='text-gray-500'>{product.description}</div>
				<div className='font-bold'>
					<div className='flex items-center gap-4'>
						<div className='text-4xl'>{getRetailPrice(product)}</div>
						<div className='text-orange-400 bg-orange-100 rounded-md px-2'>
							{product.discount > 0 ? product.discount + '%' : ''}
						</div>
					</div>
					<div className='pt-2'>
						<s className='text-gray-300'>{currencyUSD.format(product.price)}</s>
					</div>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-4'>
					<div className='flex gap-8 items-center justify-between md:max-w-48 bg-slate-100 rounded-lg text-orange-400 font-bold text-4xl h-14'>
						<button
							className='fill-orange-400 hover:fill-orange-300 px-4 h-full'
							onClick={decreaseQuantity}
						>
							<Minus />
						</button>
						<div className='text-black text-lg '>{quantity}</div>
						<button
							className='fill-orange-400 hover:fill-orange-300 px-4 h-full'
							onClick={increaseQuantity}
						>
							<Plus />
						</button>
					</div>
					<button
						onClick={handleAddToCart}
						className='bg-orange-400 rounded-lg max-w-96 text-white flex-auto fill-white flex items-center justify-center gap-4 hover:bg-orange-300 h-14'
					>
						<Cart /> <span>Add to cart</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductPage;
