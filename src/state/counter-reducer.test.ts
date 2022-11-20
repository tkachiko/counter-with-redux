import {counterReducer, CounterStateType, setCountAC, setErrorAC, setIsSetAC, setMaxValueAC, setStartValueAC} from './counter-reducer';

let startState: CounterStateType;

beforeEach(() => {
  startState = {
    count: 0,
    startValue: 0,
    maxValue: 5,
    step: 1,
    error: false,
    isSet: false,
  };
});

test('count should be set', () => {
  const action = setCountAC(2);
  const endState = counterReducer(startState, action);

  expect(endState.count).toBe(2)
});

test('start value should be set', () => {
  const action = setStartValueAC(5);
  const endState = counterReducer(startState, action);

  expect(endState.startValue).toBe(5)
});

test('max value should be set', () => {
  const action = setMaxValueAC(10);
  const endState = counterReducer(startState, action);

  expect(endState.maxValue).toBe(10)
});

test('error should be set', () => {
  const action = setErrorAC(true);
  const endState = counterReducer(startState, action);

  expect(endState.error).toBe(true)
});

test('isSet should be true', () => {
  const action = setIsSetAC(true);
  const endState = counterReducer(startState, action);

  expect(endState.isSet).toBe(true)
});
