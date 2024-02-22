import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cart-slice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
	},
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
