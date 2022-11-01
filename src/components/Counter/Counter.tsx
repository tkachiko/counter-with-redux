import React from 'react';
import {Display} from './Display/Display';
import s from './Counter.module.css';
import {Settings} from './Settings/Settings';

export type CounterPropType = {}

export const Counter: React.FC<CounterPropType> = () => {

  return (
    <div className={s.counter}>
      <Settings/>
      <Display/>
    </div>
  );
};
