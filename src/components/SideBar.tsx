import ReactDOM from 'react-dom'

function SideBar({ onClose, links }: { onClose: () => void; links: string[] }) {
	return ReactDOM.createPortal(
		<div className='z-50'>
			<div
				className='absolute inset-0 bg-gray-300 opacity-80'
				onClick={onClose}
			></div>
			<div className='fixed left-0 top-0 w-64 h-full p-5 bg-white'>
				<button onClick={onClose}>
					<img src='../../images/icon-close.svg' />
				</button>
				<div className='grid gap-6 mt-12'>
					{links.map((link: string) => {
						return (
							<a key={link} className='font-bold hover:cursor-pointer'>
								{link}
							</a>
						)
					})}
				</div>
			</div>
		</div>,
		document.querySelector('.portal')!
	)
}

export default SideBar
