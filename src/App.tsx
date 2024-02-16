import NavBar from './components/NavBar';
import ProductPage from './components/ProductPage';

export class Product {
	'name': string;
	'description': string;
	'price': number;
	'discount': number;
	'images': string[];
	'thumbnails': string[];
}

function App() {
	const fallSneaker: Product = {
		name: 'Fall Limited Edition Sneakers',
		description: `These low-profile sneakers are your perfect casual wear companion.
  Featuring a durable rubber outer sole, they’ll withstand everything
  the weather can offer.`,
		price: 250,
		discount: 50,
		images: [
			'../../images/image-product-1.jpg',
			'../../images/image-product-2.jpg',
			'../../images/image-product-3.jpg',
			'../../images/image-product-4.jpg',
		],
		thumbnails: [
			'../../images/image-product-1-thumbnail.jpg',
			'../../images/image-product-2-thumbnail.jpg',
			'../../images/image-product-3-thumbnail.jpg',
			'../../images/image-product-4-thumbnail.jpg',
		],
	};
	return (
		<div className='md:mx-10 lg:mx-24 font-kumbhSans'>
			<NavBar />
			<div className='mt-14 md:mt-28'>
				<ProductPage product={fallSneaker} />
			</div>
		</div>
	);
}

export default App;
