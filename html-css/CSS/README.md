- `<input readonly>`
    - 수정 불가, 하이라이트, 포커스, 복사, 서버 제출 가능
    - 조건이 충족되면 자바스크립트로 `readonly` 속성값을 삭제하여 사용자가 입력 필드를 수정할 수 있도록 조절 가능
- `<input disabled />`
    - 서버 제출 불가 포커스 불가
    - state에 따라서 동적으로 input value의 수정 상태를 컨트롤하고 싶었음
    - 하지만 포커스가 안돼서 `readonly`를 사용해야함
- `font-bold:weight` 일 때 Content-size가 변하는 현상
    - https://stackoverflow.com/questions/5687035/css-bolding-some-text-without-changing-its-containers-size
- background 여러개
    - [https://lab.cliel.com/entry/HTML5CSS3-배경](https://lab.cliel.com/entry/HTML5CSS3-%EB%B0%B0%EA%B2%BD)
    - https://developer.mozilla.org/en-US/docs/Web/CSS/background-position
    - https://developer.mozilla.org/en-US/docs/Web/CSS/background-size
- `position : sticky`
    - static과 fixed 속성의 특징을 모두 가지고 있는 속성
    - sticky 영역의 x 또는 y 위치값이 설정한 위치에 도달하기 전까지는 static, 도달 이후에는 fixed처럼 행동하게 됨
    - 이 상태에서 스크롤을 하단으로 내리면 `div.sticky` 영역이 뷰포트의 y 좌표 0에 도달하는 순간, 이 영역은 fixed 속성처럼 행동하게 됩니다.
- **overflow: scroll || auto**
    - scroll은 내용이 넘치지 않아도 항상 스크롤바 생성
    auto는 화면이 넘칠 때만 scroll 생성
    - 자식 엘리먼트의 높이에 따라 부모 높이 동적변경
    `$("#parent").css("overflow", "auto");`
- Attribute Selector
    
    ```css
    [data-value] {
      /* Attribute exists */
    }
    
    [data-value="foo"] {
      /* Attribute has this exact value */
    }
    
    [data-value*="foo"] {
      /* Attribute value contains this value somewhere in it */
    }
    
    [data-value~="foo"] {
      /* Attribute has this value in a space-separated list somewhere */
    }
    
    [data-value^="foo"] {
      /* Attribute value starts with this */
    }
    
    [data-value|="foo"] {
      /* Attribute value starts with this in a dash-separated list */
    }
    
    [data-value$="foo"] {
      /* Attribute value ends with this */
    }
    ```
    
    ```css
    [attribute]
    /* Selects all elements with a target attribute */
    
    [target]{
    	...
    }
    
    [attribute=value]	[target=_blank]
    /* Selects all elements with target="_blank" */
    
    [attribute~=value]	[title~=flower]	
    /* Selects all elements with a title attribute containing the word "flower" */
    
    [attribute|=value]	[lang|=en]
    /* Selects all elements with a lang attribute value starting with "en" */
    
    [attribute^=value]	a[href^="https"]
    /* Selects every <a> element whose href attribute value begins with "https" */
    
    [attribute$=value]	a[href$=".pdf"]
    /* Selects every <a> element whose href attribute value ends with ".pdf" */
    
    [attribute*=value]	a[href*="w3schools"]
    /* Selects every <a> element whose href attribute value contains the substring "w3schools" */ 
    ```
    
- 그라디언트 배경색 나누기
    - `linear-gradient` 함수는 `background`에도 적용된다.
    - 하지만 `background-image`해야 `background-size`로 조절된다.
    - 헤더 푸터와 같은 효과
        - `background-position: top, bottom; background-size: 100% 10%, 100% 10%;`
        ```jsx
        #hMyPage {
            width: 100vw;
            height: 100vh;
            background-image: linear-gradient(to right, #C293FF, #621BEE), linear-gradient(#efefef, #efefef);
            background-size: 100% 50%, 100% 50%;
            background-position: top, bottom;
            background-repeat: no-repeat, no-repeat;
        }
        ```
        <img width="287" alt="스크린샷 2024-03-03 오후 4 36 28" src="https://github.com/projectkorea/Junha-today/assets/76730867/906257eb-eea0-42d6-a247-da989da7baa1">


- `px` vs `rem`
        - px : 절대단위
    - em, rem %: 상대 단위
        - `em`: equl to capital M,
            - 부모 font-size를 그대로 받아서, rem보단 불안정함
            - 디폴트로 적용된 폰트 사이즈를 1em으로 본다.
    - `rem`: root em
        - `html 태그`에 적용된 폰트 사이즈를 1rem을 본다.
        - 최상위 요소의 글자크기에 따라 기준점이 달라진다.
    - 브라우저에서 기본 글꼴 크기가 16px로 설정되어 있지 않은 경우에는 다음과 같은 경우가 있을 수 있습니다.
        1. 브라우저에서 기본으로 설정된 글꼴 크기가 12px인 경우
        2. 사용자가 브라우저 설정에서 글꼴 크기를 변경한 경우
        3. 사용자가 브라우저에서 사용하는 운영 체제에서 설정한 글꼴 크기가 16px와 다른 경우
        4. 모바일 기기의 픽셀 밀도가 다른 경우
        5. 브라우저에서 사용하는 기본 폰트가 OS에 의해 변경되었을 경우
        6. 브라우저가 지원하는 글꼴이 변경된 경우
    - 자료를 찾아봄에도 불구하고, 버뮤다에서 `px`대신 `rem`을 사용해야 하는 이유를 찾지 못하겠다.
        - 가장 유력한 예시
            - 고정된 px을 사용했을 때 해상도에 따라 기기에서 표시되는 cm가 다를 수도 있다.
            - 200px 박스를 그리는데, 해상도마다 다르면 크기 차이가 살짝 날 수 있다.
            - 여기서 그럼 12.5`rem`을 이용한다고 가정했을 때, 브라우저 기본 글꼴이 1Rem=16px 일 경우 똑같이 200px로 계산되기 때문에 동일한 값으로 계산된다.
            - 띠리사 화면을 80% 채우는 작업을 할 때에는 뷰포트나 % 기준으로 하는 것이 나을 수 있다. 여기서 `rem`이 문제를 해결할 순 없다.
        - 다른 예시
            - 브라우저에 따라 유동적인 레이아웃이 필요한 글꼴 같은 경우엔 rem, 그외에 고정하는 작업은 px이 날 것 같다.