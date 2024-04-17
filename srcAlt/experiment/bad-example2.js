// 무한루프 형성
// 업데이트 함수에서 감시하는 변수를 재갱신하는 행동은 유의해야한다.

const { useState, useEffect } = require('react');

function Problem() {
  const [text, setText] = useState('');
  useEffect(() => {
    setText(text + '입니다.');
  }, [text]);
  return <input onChange={(e) => setText(e.target.value)}></input>;
}
