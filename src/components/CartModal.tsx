import ReactDOM from 'react-dom';

function CartModal({ onClose }: { onClose: () => void }) {
	return ReactDOM.createPortal(
		<div>
			<div className='absolute inset-0' onClick={onClose}></div>
			<div className='fixed top-16 md:top-24 md:right-14 w-full md:w-96'>
				<div className='bg-white mx-2 rounded-md drop-shadow-2xl'>
					<div className='font-bold p-4 border-b-2 border-gray-300'>Cart</div>
					<div className='p-4 pt-8 flex gap-2 justify-between'>
						<img
							className='w-12 rounded-md'
							src='../../images/image-product-1-thumbnail.jpg'
						/>
						<div className='grow'>
							<div>Fall Limited Edition Sneakers</div>
							<div>
								$125 x 3 <span className='font-bold'>$375</span>
							</div>
						</div>
						<button className='px-4'>
							<img src='../../images/icon-delete.svg' />
						</button>
					</div>
					<div className='py-4 flex justify-center'>
						<button className='bg-orange-400 rounded-lg text-white w-11/12 h-12 hover:bg-orange-300'>
							Checkout
						</button>
					</div>
				</div>
			</div>
		</div>,
		document.querySelector('.portal')!
	);
}

export default CartModal;
