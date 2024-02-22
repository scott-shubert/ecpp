import { Product } from '../App';

export const currencyUSD = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
});

export const getRetailPrice = (product: Product) => {
	return currencyUSD.format(
		product.price - product.price * (product.discount / 100)
	);
};

export const getRetailTotal = (product: Product, quantity: number) => {
	return currencyUSD.format(
		quantity * (product.price - product.price * (product.discount / 100))
	);
};
