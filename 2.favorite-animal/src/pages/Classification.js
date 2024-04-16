import Header from '../common/components/Header';
import styled from 'styled-components';
import ClassAnimalBox from '../common/components/ClassAnimalBox';
import { Link } from 'react-router-dom';

const ClassContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

const ClassContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1100px;
  margin-top: 30px;
`;

const Classification = ({ data }) => {
  return (
    <ClassContainer>
      <Header title={'내가 좋아하는 동물'} />
      <ClassContentContainer>
        <ClassAnimalBox isGood={true} data={data}></ClassAnimalBox>
        <ClassAnimalBox isGood={false} data={data}></ClassAnimalBox>
      </ClassContentContainer>
    </ClassContainer>
  );
};

export default Classification;
