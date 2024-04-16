import Animal from './Animal';
import styled from 'styled-components';

const AnimalContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: 50px;
  width: 660px;
`;

const AnimalBox = ({ animals, onClick }) => {
  const animal_array = animals.map((item, index) => {
    const { id, name, img_url, isGood } = item;
    return (
      <Animal
        key={index}
        id={id}
        name={name}
        url={img_url}
        onClick={onClick}
        isGood={isGood}
        index={index}
        isForMain={true}
      />
    );
  });

  return <AnimalContainer>{animal_array}</AnimalContainer>;
};

export default AnimalBox;
