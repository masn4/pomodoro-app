import { useState } from 'react';

const StartTimer = ({ onClick }) => {
  return <button onClick={() => onClick(true)}>START</button>;
};

export default StartTimer;
