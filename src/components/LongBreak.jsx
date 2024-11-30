function LongBreak({ onClick }) {
  return (
    <button
      onClick={() => {
        onClick(true);
      }}
    >
      Long Break
    </button>
  );
}

export default LongBreak;
