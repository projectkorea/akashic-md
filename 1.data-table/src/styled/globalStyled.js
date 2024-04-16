import styled, { keyframes } from 'styled-components';

const spin = keyframes`
 to {transform: rotate(360deg)}
`;

export const Spinner = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  &::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    margin-top: -20px;
    margin-left: -10px;
    border-radius: 50%;
    border: 2px solid #ccc;
    border-top-color: #000;
    animation: ${spin} 0.6s linear infinite;
  }
`;
