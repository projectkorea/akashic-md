# Homework
- 트리플 홈페이지의 한 섹션을 홈페지와 동일하게 구현한다.


```
1) 사용자, 리뷰, 저장 등 문구에서 숫자는 0부터 증가합니다.
2) 좌측 이미지 --> 사용자, 리뷰, 저장 문구 --> 수상 내역 순으로 화면에 보여집니다.
3) 모든 애니메이션의 duration은 700ms이고, 3개의 애니메이션은 100ms 간격으로 차례로 시작합니다.
4) 최소 화면폭은 1200px, 반응형 레이아웃은 고려하지 않습니다.
```

## 결과
  
<img src="public/readme/result.gif" width = "600px" alt="result">


## 중점 사항

**1) 컴포넌트 설계 및 상태관리**
   * Styled-Components를 사용하여 기능별 재사용 가능한 컴포넌트 설계  
   * Styled-components의 DefaultTheme을 사용하여 스타일 코드 구분 설계
   * 애니메이션 시작 시간을 Custom hook, useVisible을 통해 통합 관리

**2) 일관성있는 코드**  
   * typescript 사용으로 보다 데이터 타입을 명확히 구분  
       * React.FC: children prop, defaultProps를 이용하지 않기 때문에, 사용하지 않음으로써 코드 가독성 향상  
   * import시 폴더 구조를 명확하게 하기 위해 ./표기법 대신 폴더 이름 직접 사용  
       
        ```
        // Metrics.tsx
        import useVisible from 'common/hooks/useVisible';
        import { AnimationProp } from 'types/animationType';
        import { easeOutExpo } from 'styles/animation';
        ```  
   * eslint, prettier을 사용하여 표준화된 코드 스타일 준수


**3) 화면과 동일한 애니메이션 구현**
   * https://easings.net 사이트에서 해당 Easing Fn 찾기
   * 마지막에 극단적으로 속도가 낮아지는 [easing Exop]함수 발견
   * 해당 함수를 Countup 라이브러리 입력 attribute 형식에 맞춰 입력 후 animation.ts에 저장&사용


## 기술스택 & 디렉토리  

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white"/></a>
<img src="https://img.shields.io/badge/react countup-61DAFB?style=flat-square&logo=react&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=typescript&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Styled Components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Eslint-4B32C3?style=flat-square&logo=eslint&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white"/></a>

<img src="public/readme/directory.PNG" width="200px" alt="result"></img>