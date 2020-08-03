import {COUNTDECREMENT, COUNTINCREMENT, CounterDispatcher} from '../types/counter_t'
import {Dispatch} from 'redux'


const IncreamentCount = () => (dispatch:Dispatch<CounterDispatcher>) => {
    console.log("countTest", "IncreamentCount");
    
    dispatch({
        type: COUNTINCREMENT
    })
        
}

const DecrementCount = () => (dispatch:Dispatch<CounterDispatcher>) => {
    console.log("countTest", "DecrementCount");
    dispatch({
        type: COUNTDECREMENT
    })
}

export {IncreamentCount, DecrementCount }