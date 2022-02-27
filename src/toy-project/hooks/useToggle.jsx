import { useState } from 'react';

const useToggle = () => {
  const [isOn, setIsOn] = useState(false);
  const toggle = () => {
    return isOn ? setIsOn(false) : setIsOn(true);
  };
  return [isOn, toggle];
};

export default useToggle;
