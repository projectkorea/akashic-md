import styled from 'styled-components';

export const HeaderItem = styled.div`
  height: 41px;
  width: 278px;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const TableRowWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const FilterBtnWrapper = styled.button`
  padding: 5px 25px;
  border-radius: 50%;

  &:hover {
    background-color: #f3f3f3;
  }
  transform: scaleX(0.5);
  &::before {
    content: '';
    display: block;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: ${(props) =>
      props.active
        ? props.isDesc
          ? '10px solid red'
          : '10px solid black'
        : '10px solid black'};
    margin: 3px 0;
  }

  &::after {
    content: '';
    display: block;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: ${(props) =>
      props.active
        ? props.isDesc
          ? '10px solid black'
          : '10px solid red'
        : '10px solid black'};
  }
`;

export const NameBox = styled.div`
  width: 60%;
  padding: 5px;
  text-align: center;
  border: 1px solid black;
  border-color: ${(props) => props.theme.colors['--color-green']};
  color: ${(props) => props.theme.colors['--color-green']};
`;

export const ButtonBox = styled.button`
  width: 102px;
  height: 34px;
  padding: 5px;
  text-align: center;
  border: 1px solid black;
  border-color: ${(props) => props.theme.colors[`--color-${props.color}`]};
  color: ${(props) => props.theme.colors[`--color-${props.color}`]};
`;
