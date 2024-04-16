import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AnimalListContainer = styled.div`
  width: 400px;
  height: 860px;
`;

const AnimalListBox = styled.div`
  height: 750px;
  border: 1px solid #323232;
  padding: 198px 0;
`;

const AnimalListButton = styled.button`
  width: 400px;
  height: 80px;
  background-color: #dcdcdc;
  font-size: 24px;
  font-weight: bold;
  margin-top: 30px;
`;

const AnimalText = styled.div`
  font-size: 32px;
  text-align: center;
  font-weight: bold;
  padding-bottom: 60px;
  color: ${(props) =>
    props.isGood
      ? props.isGood === 'yes'
        ? '#006EBE'
        : '#d74B00'
      : '#323232'};
`;

const AnimalList = ({ animals }) => {
  const animalTextArray = animals.map((item) => {
    return (
      <AnimalText key={item.id} isGood={item.isGood}>
        {item.id}
      </AnimalText>
    );
  });
  return (
    <AnimalListContainer>
      <AnimalListBox>{animalTextArray}</AnimalListBox>
      <AnimalListButton>
        <Link
          to='/classification'
          style={{ textDecoration: 'none', color: '#323232' }}
        >
          좋아하는 동물들 나누기
        </Link>
      </AnimalListButton>
    </AnimalListContainer>
  );
};

export default AnimalList;
