import React, {useState} from 'react';

import { Stopwatch } from '../../classes/stopwatch/Stopwatch';

import Button from '../button/Button';

import './StopwatchDisplay.scss';

let stopwatch = new Stopwatch();

const StopwatchDisplay = () => {

  const [elapsedTime, setElapsedTime] = useState(0);
  let intervalId;

  const startTime = () => {
    stopwatch.start();
    
    let intervalInstance = setInterval(function(){
      setElapsedTime(stopwatch.getElapsedTime())
    }, 100)

    intervalId = intervalInstance
  }
  
  const stopTime = () => {
    stopwatch.stop();
    clearInterval(intervalId);
    intervalId = null;
  }

  const resetTime = () => {
    intervalId = null;
    stopwatch.reset();
    setElapsedTime(stopwatch.getElapsedTime())
  }

  return (
    <div className="stopwatch">
        <div className="stopwatch__title">Stopwatch</div>
        <div className="stopwatch__elapsedTime">{(elapsedTime/1000).toFixed(1)}</div>
        <div className="stopwatch__buttons">
            <Button onClick={startTime} text="Start"/>
            <Button onClick={stopTime} text="Stop"/>
            <Button onClick={resetTime} text="Reset"/>
        </div>
    </div>
  )
}

export default StopwatchDisplay;