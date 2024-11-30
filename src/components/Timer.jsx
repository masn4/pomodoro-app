function Timer({ clock }) {
  return <h1 className='timer'>{`${clock.min}:${clock.sec}`}</h1>;
}

export default Timer;
