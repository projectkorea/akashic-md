import { useEffect, useState } from 'react';

const Timer = ({ content }) => {
  const [timer, setTimer] = useState({
    init: true,
    isStart: false,
    isCount: false,
    isDone: false,
    count: 0,
    input: 0,
  });

  useEffect(() => {
    if (timer.count <= 0) {
      setTimer((cur) => ({
        ...cur,
        isStart: false,
        isCount: false,
        isDone: true,
      }));
    }
  }, [timer.count]);

  useEffect(() => {
    let startTimer = '';
    if (timer.isStart) {
      startTimer = setInterval(() => {
        setTimer((cur) => ({ ...cur, count: cur.count - 1 }));
      }, 1000);
    }
    return () => {
      clearInterval(startTimer);
    };
  }, [timer.isStart]);

  const isNaN = () => {
    const isNaN = Number.isNaN(timer.input - 1);
    isNaN && alert('숫자를 입력하랑께롱😂');
    return isNaN;
  };

  return (
    <div>
      <h1>{`${content} 타이머`}</h1>
      <h2>
        {timer.init
          ? `시간을 맞춰주세요😁`
          : timer.isCount
          ? `${timer.count.toLocaleString()}초 남았네요.😛`
          : `끝!!!!!!🤠`}
      </h2>
      <input
        type='text'
        onChange={({ target: { value } }) =>
          setTimer((cur) => ({ ...cur, input: value }))
        }
        disabled={timer.isCount}
      />
      <span>초 설정</span>
      <button
        onClick={() => {
          if (!isNaN()) {
            setTimer((cur) => {
              return timer.isStart
                ? { ...cur, isStart: !cur.isStart, isCount: false }
                : {
                    ...cur,
                    isStart: !cur.isStart,
                    isCount: true,
                    count: cur.input,
                    init: false,
                  };
            });
          }
        }}
      >
        {timer.isStart ? '멈춰!' : '시작'}
      </button>
      {timer.isCount && (
        <button
          onClick={() => {
            setTimer((cur) => {
              return {
                ...cur,
                isStart: !cur.isStart,
              };
            });
          }}
        >
          {timer.isStart ? '일시정지' : '다시시작'}
        </button>
      )}
      <h3>{JSON.stringify(timer)}</h3>
    </div>
  );
};

export default Timer;
