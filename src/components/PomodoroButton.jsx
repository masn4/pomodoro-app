function PomodoroButton({ onClick }) {
  return (
    <button
      onClick={() => {
        onClick(true);
      }}
    >
      Pomodoro
    </button>
  );
}

export default PomodoroButton;
