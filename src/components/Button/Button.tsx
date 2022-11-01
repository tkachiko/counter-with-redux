import React from 'react';
import s from './Button.module.css';

type ButtonPropType = {
  callBack: () => void
  disabled: boolean
  children: React.ReactNode
}

export const Button = (props: ButtonPropType) => {
  const {children, callBack, disabled} = props;

  const onClickHandler = () => {
    callBack();
  };

  const finalClassName = s.button + ' ' + (disabled ? s.disabled : s.default);

  return (
    <button disabled={disabled}
            className={finalClassName}
            onClick={onClickHandler}>{children}</button>
  );
};
