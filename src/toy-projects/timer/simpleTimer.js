import { useEffect, useState } from 'react';

function Timer({ sec }) {
  const [time, setTime] = useState(sec);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((time) => {
        if (time <= 0) {
          clearInterval(timer);
        }
        return time - 1;
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>{time > 0 ? <p>{time}초 남았습니다.</p> : <p>END</p>}</div>;
}
