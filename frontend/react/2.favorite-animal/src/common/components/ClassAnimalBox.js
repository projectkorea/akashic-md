import styled from 'styled-components';
import ClassAnimal from './ClassAnimal';

const ClassBox = styled.div`
  width: 540px;
  height: 830px;
  border: ${(props) =>
    props.isGood ? '2px solid #006ebe' : '2px solid #D74B00'};
`;

const ClassText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => (props.isGood ? '#006ebe' : '#D74B00')};
  text-align: center;
  margin: 47px 0;
`;

const ClassAnimalBox = ({ isGood, data }) => {
  return (
    <ClassBox isGood={isGood}>
      <ClassText isGood={isGood}>{isGood ? '좋아요' : '싫어요'}</ClassText>
      <ClassAnimal isGood={isGood} data={data}></ClassAnimal>
    </ClassBox>
  );
};

export default ClassAnimalBox;
