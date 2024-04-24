import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  &:hover {
    background-color: #0066ff;
  }
  transition: background-color 500ms ease-in;
`;

const ClickButton = ({ initMoney, onClick, name }) => {
  const [money, setMoney] = useState(initMoney);
  return (
    <div>
      <input onChange={(e) => setMoney(parseInt(e.target.value))} />
      <Button
        onClick={() => onClick(true, money)}
      >{`${name}에게 후원하기`}</Button>
      <Button
        onClick={() => onClick(false, money)}
      >{`${name} 돈 훔치기`}</Button>
    </div>
  );
};

export default ClickButton;
