import React, { useState, useEffect, useRef } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0); // 밀리초 단위의 시간을 저장하는 상태
  const [isRunning, setIsRunning] = useState(false); // 스톱워치가 실행 중인지 여부를 저장하는 상태
  const requestRef = useRef();
  const previousTimeRef = useRef();

  // 스톱워치 시작 및 정지 함수
  const toggleRunning = () => {
    setIsRunning(!isRunning);
  };

  // 스톱워치 리셋 함수
  const resetStopwatch = () => {
    setTime(0);
    setIsRunning(false);
  };

  // requestAnimationFrame을 사용하여 실시간으로 시간을 업데이트하는 useEffect
  useEffect(() => {
    const animate = (time) => {
      if (previousTimeRef.current !== undefined) {
        const deltaTime = time - previousTimeRef.current;
        setTime((prevTime) => prevTime + deltaTime);
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    if (isRunning) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestRef.current);
      previousTimeRef.current = undefined;
    }

    return () => cancelAnimationFrame(requestRef.current);
  }, [isRunning]);

  // 밀리초를 시:분:초:밀리초 형태로 변환하는 함수
  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedMilliseconds = ("00" + (milliseconds % 1000)).slice(-3);
    return `${minutes}:${("00" + seconds).slice(-2)}:${formattedMilliseconds}`;
  };

  return (
    <div>
      <h1>{formatTime(time)}</h1>
      <button onClick={toggleRunning}>{isRunning ? "정지" : "시작"}</button>
      <button onClick={resetStopwatch}>리셋</button>
    </div>
  );
}

export default Stopwatch;
