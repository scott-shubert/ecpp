import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { StoreDispatch, RootState } from './store';

type DispatchFunction = () => StoreDispatch;

export const useStoreDispatch: DispatchFunction = useDispatch;

export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
