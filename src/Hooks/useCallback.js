// 함수 생성 자체가 오래 걸리는 경우, 함수를 자식 컴포넌트에 props로 넘겨줄 때 useCallback()을 사용하는 것이 좋습니다.
import { useState, useCallback } from 'react';

const App = () => {
  const [firstName, setFirstName] = useState('junha');
  const [lastName, setLastName] = useState('kim');
  // 이름과 성이 바뀔 때마다 풀네임을 메모이제이션

  const getfullName = useCallback(() => {
    return `${firstName} ${lastName}`;
  }, [firstName, lastName]);

  return (
    <>
      {getfullName()}
      <button onClick={() => setFirstName('준하')}>버튼</button>
    </>
  );
};
export default App;


{
  import React, { useCallback, useState, useMemo } from "react";
import "./App.css";

const App = () => {
  const [string, setString] = useState("");
  const [stringList, setStringList] = useState([]);

  const change = useCallback((e) => {
    setString(e.target.value);
  }, []);

  const insert = useCallback(() => {
    const newList = stringList.slice();
    newList.push(string);
    setStringList(newList);
  }, [string, stringList]);

  // useCallback()을 이용해 리스트 내 문자열을 이어 붙인 sum 함수를 완성하세요.
  const sum = useCallback((li)=>{
    return li.join(" ")
  },[insert])

  const result = useMemo(() => sum(stringList), [stringList, sum]);

  return (
    <div>
      <input type="text" onChange={change} />
      <button onClick={insert}>문자열 붙이기</button>
      <br />
      {result}
    </div>
  );
};

export default App;

}