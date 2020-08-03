import {combineReducers} from 'redux'

import CounterReducer from './reducers/counter_reducer'

const RootReducer = combineReducers({
    CounterReducer
})

export default RootReducer;