const SET_COUNT = 'counter/SET_COUNT'
const SET_START_VALUE = 'counter/SET_START_VALUE'
const SET_MAX_VALUE = 'counter/SET_MAX_VALUE'
const SET_ERROR = 'counter/SET_ERROR'
const SET_IS_SET = 'counter/SET_IS_SET'

type ActionType =
  | ReturnType<typeof setCountAC>
  | ReturnType<typeof setStartValueAC>
  | ReturnType<typeof setMaxValueAC>
  | ReturnType<typeof setErrorAC>
  | ReturnType<typeof setIsSetAC>

export type CounterStateType = {
  count: number
  startValue: number
  maxValue: number
  step: number
  error: boolean
  isSet: boolean
}

const initialState: CounterStateType = {
  count: 0,
  startValue: 0,
  maxValue: 5,
  step: 1,
  error: false,
  isSet: false,
}

export const counterReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_COUNT: {
      return {
        ...state,
        count: action.count,
      }
    }
    case SET_START_VALUE: {
      return {
        ...state,
        startValue: action.startValue,
      }
    }
    case SET_MAX_VALUE: {
      return {
        ...state,
        maxValue: action.maxValue,
      }
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.error,
      }
    }
    case SET_IS_SET: {
      return {
        ...state,
        isSet: action.isSet,
      }
    }
    default:
      return state
  }
}

// ACTIONS
export const setCountAC = (count: number) => ({type: SET_COUNT, count} as const)
export const setStartValueAC = (startValue: number) => ({type: SET_START_VALUE, startValue} as const)
export const setMaxValueAC = (maxValue: number) => ({type: SET_MAX_VALUE, maxValue} as const)
export const setErrorAC = (error: boolean) => ({type: SET_ERROR, error} as const)
export const setIsSetAC = (isSet: boolean) => ({type: SET_IS_SET, isSet} as const)

