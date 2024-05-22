import React from 'react';
import styled from 'styled-components';
import useVisible from 'common/hooks/useVisible';
import { AnimationProp } from 'types/animationType';

const AwardContainer = styled.div<AnimationProp>`
  margin: 50px 0px 140px 623px;
  white-space: nowrap;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transform: translateY(${(props) => (props.isVisible ? '0px' : '10px')});
  transition: all 700ms ease-in-out 200ms;
`;

const AwardItem = styled.div`
  display: inline-block;
  height: 54px;
  background-size: 54px 54px;
  background-position: left top;
  background-repeat: no-repeat;
  padding: 5px 0px 5px 62px;
  font-size: 14px;
  line-height: 22px;
  margin-right: 39px;
  font-family: sans-serif;
  font-weight: bold;
  color: ${(props) => props.theme.colors['--color-gray800']};
`;

const PlayStore = styled(AwardItem)`
  background-image: url(./assets/images/play-store@2x.png);
`;
const AppStore = styled(AwardItem)`
  background-image: url(./assets/images/app-store@2x.png);
`;

function Awards() {
  const isVisible = useVisible();

  return (
    <AwardContainer isVisible={isVisible}>
      <PlayStore>
        2018 구글 플레이스토어
        <br />
        올해의 앱 최우수상 수상
      </PlayStore>
      <AppStore>
        2018 애플 앱스토어
        <br />
        오늘의 여행앱 선정
      </AppStore>
    </AwardContainer>
  );
}

export default Awards;
