import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { IAppDispatch, IStore } from '../RTK';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// const useAppDispatch = () => useDispatch<IAppDispatch>();
const useAppDispatch: () => IAppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<IStore['reduxStore']['getState']> = useSelector;

export { useAppDispatch, useAppSelector };
