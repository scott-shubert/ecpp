import { useState } from 'react'
import SideBar from './SideBar'
import CartModal from './CartModal'
import Cart from './icons/Cart'
import { useStoreSelector } from '../store/hooks'

function NavBar() {
	const cartCount: number = useStoreSelector((state) => {
		return state.cart.cartItems.reduce((val, item) => {
			return val + item.quantity
		}, 0)
	})
	const links = ['Collections', 'Men', 'Women', 'About', 'Contact']
	const [isSideBarOpen, setIsSideBarOpen] = useState(false)
	const [isCartOpen, setIsCartOpen] = useState(false)

	const renderedLinks = links.map((link) => {
		return (
			<a
				key={link}
				className='text-gray-500 hover:border-b-4 hover:border-orange-400 hover:cursor-pointer hover:text-black h-full pt-10 max-lg:hidden'
			>
				{link}
			</a>
		)
	})
	return (
		<>
			<div className='fixed top-0 inset-x-0 h-14 md:h-28 bg-white border-b-2 border-gray-300 max-md:px-6 md:mx-10 lg:mx-24 flex justify-between z-30'>
				<div className='flex items-center gap-4 md:gap-6'>
					<img
						src='../../images/icon-menu.svg'
						className='w-6 lg:hidden hover:cursor-pointer'
						onClick={() => setIsSideBarOpen(true)}
					/>
					<img src='../../images/logo.svg' className='w-32 mr-10' />
					{renderedLinks}
				</div>
				<div className='flex items-center gap-4 md:gap-10'>
					<button
						className='relative p-4 fill-gray-500 hover:fill-black '
						onClick={() => setIsCartOpen(true)}
					>
						<Cart />
						<span className='bg-orange-400 px-2 text-white rounded-full absolute top-1 right-1 text-[12px]'>
							{cartCount > 0 ? cartCount : ''}
						</span>
					</button>
					<img
						src='../../images/image-avatar.png'
						className='w-7 md:w-14 hover:cursor-pointer p-0.5 rounded-full hover:bg-orange-400'
					/>
				</div>
			</div>
			{isSideBarOpen && (
				<SideBar onClose={() => setIsSideBarOpen(false)} links={links} />
			)}
			{isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
		</>
	)
}

export default NavBar
