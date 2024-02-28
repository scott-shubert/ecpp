import { Product } from '../App';

export const currencyUSD = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
});

export const getRetailPrice = (product: Product) => {
	return currencyUSD.format(getPrice(product));
};

export const getRetailTotal = (product: Product, quantity: number) => {
	return currencyUSD.format(quantity * getPrice(product));
};

function getPrice(product: Product) {
	return product.price - product.price * (product.discount / 100);
}
