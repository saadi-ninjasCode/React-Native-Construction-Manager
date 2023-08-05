import CreateStore from './CreateStore';
import RootReducer from './RootReducer';

function InitializeStore() {
  const { reduxStore } = CreateStore();

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = RootReducer;
      reduxStore.replaceReducer(nextRootReducer);
    });
  }

  return { reduxStore };
}

export default InitializeStore;
