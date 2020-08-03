export const COUNTINCREMENT = 'COUNTINCREMENT'
export const COUNTDECREMENT = 'COUNTDECREMENT'


export interface CountIncrement {
    type: typeof COUNTINCREMENT
    payload?: number
}

export interface CountDecrement {
    type: typeof COUNTDECREMENT
    payload?: number
}

export type CounterDispatcher = CountIncrement|CountDecrement;
