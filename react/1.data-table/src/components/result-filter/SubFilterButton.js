import { useState } from 'react';
import { FilterBtnWrapper } from '../../styled/table';

const SubFilterButton = ({ onSortById, colNum, active, onActive, name }) => {
  const [option, setOption] = useState({
    isDesc: false,
    colNum,
    name,
  });

  const onClick = () => {
    const newOption = { ...option, isDesc: !option.isDesc };
    setOption(newOption);
    onSortById(newOption)();
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

export default SubFilterButton;
