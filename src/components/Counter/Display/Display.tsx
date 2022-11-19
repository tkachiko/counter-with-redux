import React from 'react';
import s from './Display.module.css';
import {Button} from '../../Button/Button';

export type DisplayPropType = {
  count: number
  startValue: number
  maxValue: number
  error: boolean
  isSet: boolean
  increment: () => void
  reset: () => void
}

export const Display: React.FC<DisplayPropType> = ({
                                                     count,
                                                     startValue,
                                                     maxValue,
                                                     error,
                                                     isSet,
                                                     increment,
                                                     reset,
                                                   }) => {

  const isIncButtonDisabled = count === maxValue || isSet;

  const isDifferentValues = (startValue !== 0 || maxValue !== 5) && isSet;
  const isIncorrectValue = startValue === maxValue || error;

  const incBtn = <span>inc</span>;
  const resBtn = <span>reset</span>;

  const finalClassName = s.default
    + ' ' + (isIncorrectValue
      ? s.red
      : s.default);

  const counterClassName = s.default
    + ' ' + (count === maxValue
      ? s.red
      : s.default);

  const incrementHandler = () => {
    increment();
  };
  const resetHandler = () => {
    reset();
  };

  return (
    <div className={s.display}>
      {
        isIncorrectValue
          ? <div className={`${finalClassName} ${s.message}`}>Incorrect value</div>
          : isDifferentValues
            ? <div className={`${finalClassName} ${s.message}`}>Enter values and press 'set'</div>
            : <div className={counterClassName}>{count}</div>
      }
      <div className={s.buttons}>
        <Button disabled={error ? error : isIncButtonDisabled} callBack={incrementHandler}>{incBtn}</Button>
        <Button disabled={false} callBack={resetHandler}>{resBtn}</Button>
      </div>
    </div>
  );
};
