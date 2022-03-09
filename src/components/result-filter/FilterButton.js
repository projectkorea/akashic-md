import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  transform: scaleX(0.5);
  &::before {
    content: '';
    display: block;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: ${(props) =>
      props.isDesc ? '10px solid red' : '10px solid black'};
    margin: 3px 0;
  }

  &::after {
    content: '';
    display: block;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: ${(props) =>
      props.active
        ? props.isDesc
          ? '10px solid black'
          : '10px solid red'
        : '10px solid black'};
  }
`;

const FilterButton = ({ onSort, colNum, active, onActive }) => {
  const [option, setOption] = useState({
    isDesc: false,
    colNum,
  });

  const onClick = () => {
    const newOption = { ...option, isDesc: !option.isDesc };
    setOption(newOption);
    onSort(newOption)();
    onActive();
  };
  return <Button onClick={onClick} isDesc={option.isDesc} active={active} />;
};

export default FilterButton;
