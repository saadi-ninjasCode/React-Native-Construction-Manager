import { configureStore } from '@reduxjs/toolkit';
import { Middleware, StoreEnhancer } from 'redux';
import RootReducers from './RootReducer';
import { Config } from '../../Utility';

function CreateStore() {
  const middleware: Middleware[] = [];
  const enhancers: StoreEnhancer[] = [];

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  if (Config.useReactotron) {
    const tronEnhancer = console.tron?.createEnhancer?.();
    if (tronEnhancer) {
      enhancers.push(tronEnhancer);
    }
  }

  /* ------------- Redux Store ------------- */
  const reduxStore = configureStore({
    reducer: RootReducers,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
    devTools: __DEV__,
    preloadedState: {},
    enhancers,
  });

  return { reduxStore };
}

export default CreateStore;
export type IStore = ReturnType<typeof CreateStore>;
export type IAppDispatch = IStore['reduxStore']['dispatch'];
