import {createStore, applyMiddleware} from 'redux'
import RootReducer from '../root_reducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'


import {persistReducer} from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whiteList: ['CounterReducer']
}

const persistedReducer = persistReducer(persistConfig, RootReducer)


const Store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))
export default Store

export type RootType = ReturnType<typeof RootReducer>
