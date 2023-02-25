import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import store from '@/store';

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
