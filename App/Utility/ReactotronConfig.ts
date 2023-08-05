/* eslint-disable @typescript-eslint/no-unused-vars */
// cSpell: disable
import { NativeModules } from 'react-native';
import Immutable from 'seamless-immutable';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux as reduxPlugin } from 'reactotron-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from './Config';

// Teach TypeScript about the bad things we want to do.
declare global {
  interface Console {
    /**
     * Hey, it's Reactotron if we're in dev, and no-ops if we're in prod.
     */
    tron: typeof Reactotron;
  }
}

if (Config.useReactotron) {
  const { scriptURL } = NativeModules.SourceCode;
  const scriptHostname = scriptURL.split('://')[1].split(':')[0];
  Reactotron.setAsyncStorageHandler?.(AsyncStorage)
    .configure({ name: 'App', host: scriptHostname })
    .useReactNative()
    .use(
      reduxPlugin({
        onRestore: ({ nav, ...state }) => ({ ...Immutable(state), nav }),
      }),
    )
    .connect();

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear?.();

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
  console.tron = Reactotron;
} else {
  // attach a mock so if things sneaky by our __DEV__ guards, we won't crash.
  const noop = () => undefined;
  const ouroboros = () => console.tron;
  console.tron = {
    overlay: (App: React.ReactNode) => {},
    storybookSwitcher: (App: React.ReactNode) => (Root: React.ReactNode) => Root,
    startTimer: () => () => 0,
    send: noop,
    apiResponse: noop,
    debug: noop,
    stateActionComplete: noop,
    stateValuesResponse: noop,
    stateKeysResponse: noop,
    stateValuesChange: noop,
    stateBackupResponse: noop,
    repl: noop,
    warn: noop,
    configure: ouroboros,
    connect: ouroboros,
    use: ouroboros,
    useReactNative: ouroboros,
    close: noop,
    clear: noop,
    log: noop,
    logImportant: noop,
    display: noop,
    error: noop,
    image: noop,
    reportError: noop,
    benchmark: name => ({ step: noop, stop: noop, last: noop }),
    onCustomCommand: config => noop,
  };
}
