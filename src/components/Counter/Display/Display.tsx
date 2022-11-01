import React from 'react';
import s from './Display.module.css';
import {Button} from '../../Button/Button';

export type DisplayPropType = {}

export const Display: React.FC<DisplayPropType> = () => {
  const incBtn = <span>inc</span>;
  const resBtn = <span>reset</span>;

  return (
    <div className={s.display}>
      <div className={s.default}>0</div>
      <div className={s.buttons}>
        <Button disabled={false} callBack={()=>{}}>{incBtn}</Button>
        <Button disabled={false} callBack={()=>{}}>{resBtn}</Button>
      </div>
    </div>
  );
};
