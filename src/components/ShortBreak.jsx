function ShortBreak({ onClick }) {
  return (
    <button
      onClick={() => {
        onClick(true);
      }}
    >
      Short Break
    </button>
  );
}

export default ShortBreak;
