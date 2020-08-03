import {
  COUNTDECREMENT,
  COUNTINCREMENT,
  CounterDispatcher,
} from '../action/types/counter_t';

interface CounterDefaultState {
  payload: number;
}

const defaultState: CounterDefaultState = {
  payload: 0,
};

const CounterReducer = (
  state = defaultState,
  action: CounterDispatcher,
): CounterDefaultState => {
  console.log("countTest", action.type);
  
  switch (action.type) {

    case COUNTINCREMENT:
      return {
        ...state,
        payload: state.payload + 1,
      };

    case COUNTDECREMENT:
      return {
        ...state,
        payload: state.payload - 1,
      };

    default:
        return state
  }
};

export default CounterReducer;
