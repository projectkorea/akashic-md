import { useState } from 'react';
import { FilterBtnWrapper } from '../../styled/table';

const MainFilterButton = ({ onSort, colNum, active, onActive }) => {
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
  return (
    <FilterBtnWrapper
      onClick={onClick}
      isDesc={option.isDesc}
      active={active}
    />
  );
};

export default MainFilterButton;
