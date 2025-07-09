import { useRef, useEffect } from 'react';
import { Animated, Easing } from 'react-native';

// 1. 기본 애니메이션 값 생성
const Example = () => {
  // 애니메이션 값들 초기화
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  
  // 1. 기본 타이밍 애니메이션
  const basicTiming = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
      easing: Easing.ease // 기본 이징
    }).start();
  };

  // 2. 병렬 애니메이션 (동시 실행)
  const parallelAnimation = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 100,
        useNativeDriver: true,
        // spring 특화 속성들
        tension: 40,    // 스프링의 탄성 (기본값: 40)
        friction: 7,    // 마찰력 (기본값: 7)
        speed: 12,      // 초기 속도
      }),
    ]).start();
  };

  // 3. 순차 애니메이션 (차례대로 실행)
  const sequenceAnimation = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1.2,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // 4. 지연 후 실행
  const delayedAnimation = () => {
    Animated.sequence([
      Animated.delay(1000), // 1초 지연
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // 5. 스태거 애니메이션 (여러 항목을 순차적으로 약간의 딜레이를 두고 실행)
  const staggerAnimation = (items) => {
    const animations = items.map((item, i) => {
      return Animated.timing(item.anim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
        delay: i * 100, // 각 항목마다 100ms 딜레이
      });
    });

    Animated.stagger(100, animations).start();
  };

  // 6. 반복 애니메이션
  const loopAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: -1, // -1은 무한반복
      }
    ).start();
  };

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [
          { translateX: slideAnim },
          { scale: scaleAnim }
        ]
      }}
    >
      {/* 컨텐츠 */}
    </Animated.View>
  );
};