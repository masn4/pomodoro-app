import Timer from './components/Timer';
import StartTimer from './components/StartTimer';
import PauseTimer from './components/PauseTimer';
import ShortBreak from './components/ShortBreak';
import LongBreak from './components/LongBreak';
import PomodoroButton from './components/PomodoroButton';
import { useState } from 'react';

let IntervalID;

function App() {
  const [clockInfo, setClock] = useState({
    min: '25'.padStart(2, '0'),
    sec: '0'.padStart(2, '0'),
    isRunning: false,
    timerStarted: false,
    timerFinished: false,
    // sMin: '5'.padStart(2, '0'),
    // sSec: '0'.padStart(2, '0'),
    // lMin: '15'.padStart(2, '0'),
    // lSec: '0'.padStart(2, '0'),
  });

  const setTimer = (whichTimer) => {
    if (whichTimer === true && clockInfo.isRunning === false) {
      //sets clock to running
      setClock((prevValues) => ({
        ...prevValues,
        isRunning: true,
        timerStarted: true,
      }));

      //starts loop to continue countdown
      IntervalID = setInterval(() => {
        setClock((prevValues) => {
          if (prevValues.min === '00' && prevValues.sec === '00') {
            console.log('t');
            clearInterval(IntervalID);
            return {
              min: '5'.padStart(2, '0'),
              sec: '0'.padStart(2, '0'),
              isRunning: false,
              timerStarted: true,
              timerFinished: true,
            };
          }

          if (prevValues.sec > 0) {
            return {
              ...prevValues,
              sec: (prevValues.sec - 1).toString().padStart(2, '0'),
              isRunning: true,
              timerStarted: true,
            };
          } else if (prevValues.sec == 0 && prevValues.min > 0) {
            return {
              ...prevValues,
              min: (prevValues.min - 1).toString().padStart(2, '0'),
              sec: '59',
              isRunning: true,
              timerStarted: true,
            };
          }

          return prevValues;
        });
      }, 1000);
    } else if (whichTimer === false) {
      clearInterval(IntervalID);
      setClock((prevValues) => {
        return { ...prevValues, isRunning: false };
      });
    }
  };

  const setShortBreak = () => {
    setClock((prevValues) => {
      if (prevValues.isRunning === true) {
        clearInterval(IntervalID);
      }
      console.log('shortbreak');
      return {
        ...prevValues,
        isRunning: false,
        min: '5'.padStart(2, '0'),
        sec: '0'.padStart(2, '0'),
      };
    });
  };

  const setLongBreak = () => {
    setClock((prevValues) => {
      if (prevValues.isRunning === true) {
        clearInterval(IntervalID);
      }
      console.log('lonbreak');
      return {
        ...prevValues,
        isRunning: false,
        min: '15'.padStart(2, '0'),
        sec: '0'.padStart(2, '0'),
      };
    });
  };

  const setPomodoro = () => {
    setClock((prevValues) => {
      if (prevValues.isRunning === true) {
        clearInterval(IntervalID);
      }
      console.log('hpomdoroit');
      return {
        ...prevValues,
        isRunning: false,
        min: '25'.padStart(2, '0'),
        sec: '0'.padStart(2, '0'),
      };
    });
  };

  return (
    <div
      className='container'
      style={
        clockInfo.timerFinished
          ? { backgroundColor: 'lightblue' }
          : { backgroundColor: 'maroon' }
      }
    >
      <div className='pomodoroMainOptions'>
        <h1>Pomodoro</h1>
        <Timer clock={clockInfo} />
        <StartTimer onClick={setTimer} />
        <PauseTimer onClick={setTimer} />
        <PomodoroButton onClick={setPomodoro} />
        <ShortBreak onClick={setShortBreak} />
        <LongBreak onClick={setLongBreak} />
      </div>
    </div>
  );
}

export default App;
