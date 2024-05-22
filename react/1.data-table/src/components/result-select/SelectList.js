import styled from 'styled-components';

const SelectedItem = styled.div`
  font-size: 20px;
  padding: 5px;
  margin: 10px 15px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 180px;
`;

const DeleteBtn = styled.button`
  margin-left: 10px;
  padding: 0 5px;
  width: 20px;
  height: 20px;
  background-color: black;
  color: white;
  border-radius: 50%;
  font-size: 16px;
`;

const SelectList = ({ item, onSelect }) => {
  const [name, value] = item[0];
  return (
    <SelectedItem>
      <span>{`${name}-${value}`}</span>
      <DeleteBtn onClick={() => onSelect(name)(value)}>X</DeleteBtn>
    </SelectedItem>
  );
};

export default SelectList;
