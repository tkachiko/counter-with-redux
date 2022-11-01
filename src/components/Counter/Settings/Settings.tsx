import React from 'react';
import s from './Settings.module.css';
import {Button} from '../../Button/Button';

export type SettingsPropType = {}

export const Settings: React.FC<SettingsPropType> = () => {
  const setBtn = <span>set</span>;

  return (
    <div className={s.settings}>
      <div className={s.default}>
        <div className={s.value}>
          <span>max value:</span>
          <input className={s.default} onChange={()=>{}} type="number" value={0}/>
        </div>
        <div className={s.value}>
          <span>start value:</span>
          <input className={s.default} onChange={()=>{}} type="number" value={0}/>
        </div>
      </div>
      <div className={s.buttons}>
        <Button disabled={false} callBack={()=>{}}>{setBtn}</Button>
      </div>
    </div>
  );
};
