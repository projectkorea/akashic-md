import { useEffect, useState } from 'react';

const App = () => {
  const [isStart, setIsStart] = useState(false);
  const [input, setInput] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    console.log('timer effect');
    if (timer <= 0) {
      setIsStart(false);
    }
  }, [timer]);

  useEffect(() => {
    let startTimer = '';
    console.log('interval', isStart);
    if (isStart) {
      startTimer = setInterval(() => {
        setTimer((current) => current - 1);
      }, 1000);
    }
    return () => {
      console.log('clean effect');
      clearInterval(startTimer);
    };
  }, [isStart]);

  return (
    <>
      <h1>{`${timer.toLocaleString()}초 남았네요.😛`}</h1>
      <input
        type='text'
        onChange={({ target: { value } }) => setInput(value)}
        disabled={isStart}
      />
      <span>초 설정</span>
      <button
        onClick={() => {
          setIsStart(!isStart);
          isStart || setTimer(input);
        }}
      >
        {isStart ? '멈춰!' : '시작'}
      </button>
    </>
  );
};

export default App;
