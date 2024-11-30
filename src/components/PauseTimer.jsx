const PauseTimer = ({ onClick }) => {
  return <button onClick={() => onClick(false)}>PAUSE</button>;
};

export default PauseTimer;
