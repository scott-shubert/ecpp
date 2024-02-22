import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../App';

type cartItem = {
	product: Product;
	quantity: number;
};

type cartState = {
	cartItems: cartItem[];
};

const initialState: cartState = {
	cartItems: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<cartItem>) {
			const itemIndex = state.cartItems.findIndex((cartItem) => {
				return cartItem.product.id === action.payload.product.id;
			});
			if (itemIndex >= 0) {
				state.cartItems[itemIndex].quantity += action.payload.quantity;
			} else {
				state.cartItems.push(action.payload);
			}
		},
		removeFromCart(state, action: PayloadAction<string>) {
			const itemIndex = state.cartItems.findIndex((cartItem) => {
				return cartItem.product.id === action.payload;
			});
			if (itemIndex >= 0) {
				state.cartItems.splice(itemIndex, 1);
			}
		},
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;
