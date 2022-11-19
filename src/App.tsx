import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';

const STEP = 1;

function App() {
  const [count, setCount] = useState<number>(0);
  const [startValue, setStartValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(5);
  const [error, setError] = useState<boolean>(false);
  const [isSet, setIsSet] = useState<boolean>(true);

  useEffect(() => {
    const storedValue = localStorage.getItem('counterValue');
    const storedStartValue = localStorage.getItem(('startValue'));
    const storedMaxValue = localStorage.getItem(('maxValue'));
    if (storedValue) {
      setCount(JSON.parse(storedValue));
      if (storedStartValue) {
        setStartValue(JSON.parse(storedStartValue));
      }
      if (storedMaxValue) {
        setMaxValue(JSON.parse(storedMaxValue));
      }
    }
  }, []);

  useEffect(() => {
    if (count) {
      localStorage.setItem('counterValue', JSON.stringify(count));
    }
  }, [count]);

  const increment = () => {
    if (startValue === maxValue) {
      return;
    }
    setCount(count + STEP);
  };

  const reset = () => {
    setCount(startValue);
  };

  const setMaxValueCallback = (value: number) => {
    setMaxValue(value);
    setError(value <= startValue);
    setIsSet(true);
  };

  const setStartValueCallback = (value: number) => {
    setStartValue(value);
    setError(value < 0 || value >= maxValue);
    setIsSet(true);
  };

  const setValuesCallback = () => {
    localStorage.setItem('startValue', JSON.stringify(startValue));
    localStorage.setItem('maxValue', JSON.stringify(maxValue));
    setCount(startValue);
    setIsSet(false);
  };

  return (
    <div className="App">
      <Counter
        count={count}
        startValue={startValue}
        maxValue={maxValue}
        error={error}
        isSet={isSet}
        increment={increment}
        reset={reset}
        setStartValueCallback={setStartValueCallback}
        setMaxValueCallback={setMaxValueCallback}
        setValuesCallback={setValuesCallback}
      />
    </div>
  );
}

export default App;
