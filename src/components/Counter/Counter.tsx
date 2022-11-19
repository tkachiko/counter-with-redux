import React from 'react';
import {Display} from './Display/Display';
import s from './Counter.module.css';
import {Settings} from './Settings/Settings';

export type CounterPropType = {
  count: number
  startValue: number
  maxValue: number
  error: boolean
  isSet: boolean
  increment: () => void
  reset: () => void
  setStartValueCallback: (value: number) => void
  setMaxValueCallback: (value: number) => void
  setValuesCallback: () => void
}

export const Counter: React.FC<CounterPropType> = ({
                                                     count,
                                                     startValue,
                                                     maxValue,
                                                     error,
                                                     isSet,
                                                     increment,
                                                     reset,
                                                     setStartValueCallback,
                                                     setMaxValueCallback,
                                                     setValuesCallback,
                                                   }) => {

  return (
    <div className={s.counter}>
      <Settings
        startValue={startValue}
        maxValue={maxValue}
        error={error}
        isSet={isSet}
        setStartValueCallback={setStartValueCallback}
        setMaxValueCallback={setMaxValueCallback}
        setValuesCallback={setValuesCallback}
      />
      <Display
        count={count}
        startValue={startValue}
        maxValue={maxValue}
        error={error}
        isSet={isSet}
        increment={increment}
        reset={reset}
      />
    </div>
  );
};
