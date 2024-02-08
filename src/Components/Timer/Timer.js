import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Timer = ({duration}) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime((prevTime) => Math.max(0, prevTime - 1000)); 
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  const get_time = () => {
    let totalSeconds = parseInt(Math.floor(time / 1000));
    let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
    let totalHours = parseInt(Math.floor(totalMinutes / 60));
    let seconds = totalSeconds % 60;
    let minutes = totalMinutes % 60;
    let hours = totalHours % 24;

    return `${hours}:${minutes}:${seconds}`;
  };

  return <div>{get_time()}</div>;
};

export default Timer;
