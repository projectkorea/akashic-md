import React from 'react';
import styled from 'styled-components';
import { AnimationProp } from 'types/animationType';
import useVisible from 'common/hooks/useVisible';

const LogoContainer = styled.div<AnimationProp>`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  padding-top: 280px;
  font-size: 15px;
  background-image: url(./assets/images/triple@2x.png);
  background-repeat: no-repeat;
  text-align: center;
  font-family: sans-serif;
  color: ${(props) => props.theme.colors['--color-gray700']};
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transform: translateY(${(props) => (props.isVisible ? '0px' : '10px')});
  transition: all 700ms ease-in-out 0s;
`;

function ContentLogo() {
  const isVisible = useVisible();

  return (
    <>
      <LogoContainer isVisible={isVisible}>2021년 5월 기준</LogoContainer>
    </>
  );
}

export default ContentLogo;
