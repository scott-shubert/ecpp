import ReactDOM from 'react-dom';
import { removeFromCart } from '../store/cart-slice';
import { useStoreDispatch, useStoreSelector } from '../store/hooks';
import { getRetailPrice, getRetailTotal } from '../utils/CurrencyFormatter';

function CartModal({ onClose }: { onClose: () => void }) {
	const dispatch = useStoreDispatch();
	const products = useStoreSelector((state) => {
		return state.cart.cartItems;
	});

	let productDisplay, modalBody;

	const handleDelete = () => {
		dispatch(removeFromCart('33'));
	};

	if (products.length > 0) {
		productDisplay = products.map((product) => {
			return (
				<span key={product.product.id}>
					<div>{product.product.name}</div>
					<div>
						{getRetailPrice(product.product)} x {product.quantity}{' '}
						<span className='font-bold'>
							{getRetailTotal(product.product, product.quantity)}
						</span>
					</div>
				</span>
			);
		});
		modalBody = (
			<>
				<div className='p-4 pt-8 flex gap-2 justify-between'>
					<img
						className='w-12 rounded-md'
						src='../../images/image-product-1-thumbnail.jpg'
					/>
					<div className='grow'>{productDisplay}</div>
					<button onClick={handleDelete} className='px-4'>
						<img src='../../images/icon-delete.svg' />
					</button>
				</div>
				<div className='py-4 flex justify-center'>
					<button className='bg-orange-400 rounded-lg text-white w-11/12 h-12 hover:bg-orange-300'>
						Checkout
					</button>
				</div>
			</>
		);
	} else {
		modalBody = (
			<div className='py-[76px] text-center'>Your cart is empty.</div>
		);
	}

	return ReactDOM.createPortal(
		<div>
			<div className='absolute inset-0' onClick={onClose}></div>
			<div className='fixed top-16 md:top-24 md:right-14 w-full md:w-96'>
				<div className='bg-white mx-2 rounded-md drop-shadow-2xl'>
					<div className='font-bold p-4 border-b-2 border-gray-300'>Cart</div>
					{modalBody}
				</div>
			</div>
		</div>,
		document.querySelector('.portal')!
	);
}

export default CartModal;
