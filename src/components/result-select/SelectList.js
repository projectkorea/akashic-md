const SelectList = ({ item, onSelect }) => {
  const [name, value] = item[0];
  return (
    <div>
      <span>{`${name}-${value}`}</span>
      <button onClick={() => onSelect(name)(value)}>X</button>
    </div>
  );
};

export default SelectList;
