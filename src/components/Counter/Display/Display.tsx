import React from 'react';
import s from './Display.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../bll/store';
import {setCountAC} from '../../../bll/counter-reducer';
import {Button} from '../../Button/Button';

export const Display = () => {
  const count = useSelector<AppRootStateType, number>(state => state.counter.count);
  const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue);
  const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue);
  const isSet = useSelector<AppRootStateType, boolean>(state => state.counter.isSet);
  const step = useSelector<AppRootStateType, number>(state => state.counter.step);
  const error = useSelector<AppRootStateType, boolean>(state => state.counter.error);

  const dispatch = useDispatch();

  const isIncButtonDisabled = count === maxValue || !isSet;

  const isDifferentValues = (startValue === 0 || startValue !== 0 || maxValue !== 5) && !isSet;
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
    dispatch(setCountAC(count + step));
  };
  const resetHandler = () => {
    dispatch(setCountAC(startValue));
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
        <Button disabled={!isSet} callBack={resetHandler}>{resBtn}</Button>
      </div>
    </div>
  );
};
