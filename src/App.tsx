import { Provider } from 'react-redux'
import NavBar from './components/NavBar'
import ProductPage from './components/ProductPage'
import { store } from './store/store'
import { fallSneaker } from '../SampleData/fallSneaker'

export interface Product {
	name: string
	id: string
	description: string
	price: number
	discount: number
	images: string[]
	thumbnails: string[]
}

function App() {
	return (
		<Provider store={store}>
			<div className='md:mx-10 lg:mx-24 font-kumbhSans'>
				<NavBar />
				<div className='mt-14 md:mt-28'>
					<ProductPage product={fallSneaker} />
				</div>
			</div>
		</Provider>
	)
}

export default App
