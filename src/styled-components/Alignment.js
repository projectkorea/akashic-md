import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ;
`;

const Parent = styled.div`
  width: 400px;
  height: 400px;
  border: 5px solid black;
  display: flex;
  flex-direction: ${(props) => (props.toggle ? 'row-reverse' : 'column')};
`;

const A = styled.div`
  background-color: aqua;
  flex-grow: 1;
`;

const B = styled.div`
  background-color: brown;
  flex-grow: 2;
`;

const Alignment = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Button>버튼</Button>
      <button onClick={() => setToggle(!toggle)}>버튼</button>
      <Parent toggle={toggle}>
        <A></A>
        <B></B>
      </Parent>
    </>
  );
};

export default Alignment;
