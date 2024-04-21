import { useState, useEffect } from "react";

// useEffect 내에서 상태를 변경해야 한다면, 의존성 배열을 잘 조절하여 무한 루프를 조심해야함
function Problem2() {
  const [text, setText] = useState("");
  useEffect(() => {
    setText(text + "입니다.");
  }, [text]);
  return <input onChange={(e) => setText(e.target.value)}></input>;
  // return <input onChange={(e) => setText(e.target.value + "입니다.")}></input>;
}

// a는 일반 JavaScript 변수이며, React의 상태(State)가 아닙니다. 따라서 useEffect는 a의 변경을 감지할 수 없다.
function App() {
  let count = 1;
  useEffect(() => console.log("Guess this code will run or not?"), [count]);
  return (
    <button
      onClick={() => {
        console.log(count);
        count += 1;
      }}
    >
      {" "}
      일반 변수 증가시키기
    </button>
  );
}

// setState로 같은 값을 업데이트 하면 리랜더링이 될까? 안될까?
// state가 두 번 이상 변하지 않으면 setState함수를 이용하더라도 리랜더링 하지 않는다.!!😱

const App3 = () => {
  const [state, setState] = useState(0);
  useEffect(() => setTimeout(() => setState(1), 0), []);
  // double render 0, 1

  setTimeout(() => setState(1), 0);
  // triple render 0, 1, 1

  setTimeout(() => {
    console.log("setTimeout", state);
    setState(1);
  }, 0);
};

export default App3;