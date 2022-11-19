import React, {ChangeEvent} from 'react';
import s from './Settings.module.css';
import {Button} from '../../Button/Button';

export type SettingsPropType = {
  startValue: number
  maxValue: number
  error: boolean
  isSet: boolean
  setStartValueCallback: (value: number) => void
  setMaxValueCallback: (value: number) => void
  setValuesCallback: () => void
}

export const Settings: React.FC<SettingsPropType> = ({
                                                       startValue,
                                                       maxValue,
                                                       error,
                                                       isSet,
                                                       setStartValueCallback,
                                                       setMaxValueCallback,
                                                       setValuesCallback,
                                                     }) => {
  const setBtn = <span>set</span>;

  const finalClassName = s.default
    + ' ' + (error
      ? s.red
      : s.default);

  const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValueCallback(+e.currentTarget.value);
  };

  const setStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setStartValueCallback(+e.currentTarget.value);
  };

  const setValuesHandler = () => {
    setValuesCallback();
  };

  return (
    <div className={s.settings}>
      <div className={s.default}>
        <div className={s.value}>
          <span>max value:</span>
          <input className={finalClassName} onChange={setMaxValueHandler} type="number" value={maxValue}/>
        </div>
        <div className={s.value}>
          <span>start value:</span>
          <input className={finalClassName} onChange={setStartValueHandler} type="number" value={startValue}/>
        </div>
      </div>
      <div className={s.buttons}>
        <Button disabled={!isSet || error} callBack={setValuesHandler}>{setBtn}</Button>
      </div>
    </div>
  );
};
