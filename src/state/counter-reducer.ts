const SET_COUNT = 'counter/SET_COUNT';
const SET_START_VALUE = 'counter/SET_START_VALUE';
const SET_MAX_VALUE = 'counter/SET_MAX_VALUE';
const SET_ERROR = 'counter/SET_ERROR';
const SET_IS_SET = 'counter/SET_IS_SET';

type ActionType = setCountACType | SetStartValueACType
  | SetMaxValueACType | SetErrorACType | SetIsSetACType

export type CounterStateType = {
  count: number
  startValue: number
  maxValue: number
  step: number
  error: null | string
  isSet: boolean
}

const initialState: CounterStateType = {
  count: 0,
  startValue: 0,
  maxValue: 5,
  step: 1,
  error: null,
  isSet: false
};

export const counterReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_COUNT: {
      return {
        ...state,
        count: action.count
      };
    }
    case SET_START_VALUE: {
      return {
        ...state,
        startValue: action.startValue
      };
    }
    case SET_MAX_VALUE: {
      return {
        ...state,
        maxValue: action.maxValue
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.error
      };
    }
    case SET_IS_SET: {
      return {
        ...state,
        isSet: action.isSet
      };
    }
    default:
      return state
  }
};

type setCountACType = ReturnType<typeof setCountAC>
export const setCountAC = (count: number) => {
  return {
    type: SET_COUNT,
    count
  } as const;
};

type SetStartValueACType = ReturnType<typeof setStartValueAC>
export const setStartValueAC = (startValue: number) => {
  return {
    type: SET_START_VALUE,
    startValue
  } as const;
};

type SetMaxValueACType = ReturnType<typeof setMaxValueAC>
export const setMaxValueAC = (maxValue: number) => {
  return {
    type: SET_MAX_VALUE,
    maxValue
  } as const;
};

type SetErrorACType = ReturnType<typeof setErrorAC>
export const setErrorAC = (error: string) => {
  return {
    type: SET_ERROR,
    error
  } as const;
};

type SetIsSetACType = ReturnType<typeof setIsSetAC>
export const setIsSetAC = (isSet: boolean) => {
  return {
    type: SET_IS_SET,
    isSet
  } as const;
};