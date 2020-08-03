/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import Store from './src/redux/store/store';

import {PersistGate} from 'redux-persist/es/integration/react';
import {persistStore} from 'redux-persist'

const persistedStore = persistStore(Store)

const APP = () => {
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistedStore} loading-={null} >
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => APP);
