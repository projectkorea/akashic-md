import styled from 'styled-components';

const Button = styled.button`
  width: 135px;
  height: 45px;
  margin-top: 15px;
  margin-right: 15px;
  font-size: 16px;
  font-weight: regular;
  color: ${(props) =>
    props.isGoodButton
      ? props.isGood
        ? props.isGood === 'yes'
          ? '#fff'
          : '#323232'
        : '#323232'
      : props.isGood
      ? props.isGood === 'no'
        ? '#fff'
        : '#323232'
      : '#323232'};
  background-color: ${(props) =>
    props.isGoodButton
      ? props.isGood
        ? props.isGood === 'yes'
          ? '#006EBE'
          : '#fff'
        : '#fff'
      : props.isGood
      ? props.isGood === 'no'
        ? '#d74B00'
        : '#fff'
      : '#fff'};
  border: 1px solid #a5a5a5;
`;

const AnimalButton = ({ isGoodButton, isGood, onClick }) => {
  return (
    <Button isGood={isGood} isGoodButton={isGoodButton} onClick={onClick}>
      {isGoodButton ? '좋아요' : '싫어요'}
    </Button>
  );
};

export default AnimalButton;

// { backgroundColor: ' }
