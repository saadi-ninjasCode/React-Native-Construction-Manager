import { NavigationContainer } from '@react-navigation/native';
import React, { Suspense } from 'react';
import { ActivityIndicator } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { RootContainer } from './Navigation';
import { InitializeStore } from './RTK';
import { Config } from './Utility';

// create our store
const { reduxStore } = InitializeStore();

// Entry Point
const App = () => {
  return (
    <Suspense fallback={<ActivityIndicator />}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider store={reduxStore}>
          <PaperProvider>
            <NavigationContainer>
              <RootContainer />
            </NavigationContainer>
          </PaperProvider>
        </Provider>
      </GestureHandlerRootView>
    </Suspense>
  );
};

// allow reactotron overlay for fast design in dev mode
//@ts-ignore
export default Config.useReactotron ? console.tron.overlay(App) : App;
