import Animal from './Animal';
import styled from 'styled-components';

const AnimalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ClassAnimal = ({ data, isGood }) => {
  const isGoodStr = isGood ? 'yes' : 'no';
  const animal_array = data
    .filter((item) => item.isGood === isGoodStr)
    .map((item, index) => {
      const { id, name, img_url, isGood } = item;
      return (
        <Animal
          key={index}
          id={id}
          name={name}
          url={img_url}
          isGood={isGood}
          index={index}
          isForMain={false}
        />
      );
    });
  console.log(animal_array);

  return <AnimalContainer>{animal_array}</AnimalContainer>;
};

export default ClassAnimal;
