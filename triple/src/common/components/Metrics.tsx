import React from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';
import useVisible from 'common/hooks/useVisible';
import { AnimationProp } from 'types/animationType';
import { easeOutExpo } from 'styles/animation';

const MetricsContainer = styled.div<AnimationProp>`
  margin-left: 623px;
  padding-top: 150px;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transform: translateY(${(props) => (props.isVisible ? '0px' : '10px')});
  transition: all 700ms ease-in-out 100ms;
`;
const MetricItem = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors['--color-gray']};
`;

function Metrics() {
  const isVisible = useVisible();
  return (
    <>
      <MetricsContainer isVisible={isVisible}>
        <MetricItem>
          <strong>
            <CountUp end={635} duration={2} useEasing easingFn={easeOutExpo} />만 명
          </strong>
          의 여행자
        </MetricItem>
        <MetricItem>
          <strong>
            <CountUp end={95} duration={2} useEasing easingFn={easeOutExpo} />만 개
          </strong>
          의 여행 리뷰
        </MetricItem>
        <MetricItem>
          <strong>
            <CountUp end={425} duration={2} useEasing easingFn={easeOutExpo} />만 개
          </strong>
          의 여행 일정
        </MetricItem>
      </MetricsContainer>
    </>
  );
}

export default Metrics;
