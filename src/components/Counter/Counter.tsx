import React from 'react';
import {Display} from './Display/Display';
import s from './Counter.module.css';
import {Settings} from './Settings/Settings';

export const Counter = () => {
  return (
    <div className={s.counter}>
      <Settings/>
      <Display/>
    </div>
  );
};
