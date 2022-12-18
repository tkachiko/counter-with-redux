import React, {ChangeEvent} from 'react';
import s from './Settings.module.css';
import {Button} from '../../Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../bll/store';
import {setCountAC, setErrorAC, setIsSetAC, setMaxValueAC, setStartValueAC} from '../../../bll/counter-reducer';

export const Settings = () => {

  const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue);
  const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue);
  const isSet = useSelector<AppRootStateType, boolean>(state => state.counter.isSet);
  const error = useSelector<AppRootStateType, boolean>(state => state.counter.error);

  const dispatch = useDispatch();

  const setStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.currentTarget.value;
    dispatch(setStartValueAC(value));
    dispatch(setErrorAC(value < 0 || value >= maxValue));
    dispatch(setIsSetAC(false));
  };
  const setMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.currentTarget.value;
    dispatch(setMaxValueAC(value));
    dispatch(setErrorAC(value <= startValue));
    dispatch(setIsSetAC(false));
  };
  const setValues = (startValue: number, maxValue: number) => {
    dispatch(setStartValueAC(startValue));
    dispatch(setMaxValueAC(maxValue));
    dispatch(setErrorAC(false));
    dispatch(setIsSetAC(true));
    dispatch(setCountAC(startValue));
  };

  const setBtn = <span>set</span>;

  const finalClassName = s.default
    + ' ' + (error
      ? s.red
      : s.default);

  return (
    <div className={s.settings}>
      <div className={s.default}>
        <div className={s.value}>
          <span>max value:</span>
          <input className={finalClassName} onChange={setMaxValue} type="number" value={maxValue}/>
        </div>
        <div className={s.value}>
          <span>start value:</span>
          <input className={finalClassName} onChange={setStartValue} type="number"
                 value={startValue}/>
        </div>
      </div>
      <div className={s.buttons}>
        <Button disabled={isSet || error} callBack={() => setValues(startValue, maxValue)}>{setBtn}</Button>
      </div>
    </div>
  );
};
