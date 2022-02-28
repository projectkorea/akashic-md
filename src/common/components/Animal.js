import styled from 'styled-components';
import AnimalButton from './AnimalButton';

const AnimalImage = styled.img`
  width: 285px;
  height: 285px;
`;

const AnimalContainer = styled.div`
  margin-bottom: 30px;
`;

const AnimalButtonContainer = styled.div`
  display: flex;
  margin-right: 15px;
  margin-bottom: 30px;
`;

const Animal = ({ id, name, url, onClick, isGood, index, isForMain }) => {
  return (
    <AnimalContainer>
      <AnimalImage src={url} alt={name} />
      {isForMain ? (
        <AnimalButtonContainer>
          <AnimalButton
            isGood={isGood}
            isGoodButton={true}
            onClick={onClick('yes')(index)}
          />
          <AnimalButton
            isGood={isGood}
            isGoodButton={false}
            onClick={onClick('no')(index)}
          />
        </AnimalButtonContainer>
      ) : (
        ''
      )}
    </AnimalContainer>
  );
};

export default Animal;
