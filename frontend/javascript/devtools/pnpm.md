# pnpm


- pnpm auto install peers
    
    `pnpm config set auto-install-peers true`
    
    `pnpm config delete auto-install-peers`
    
    ```bash
    // .nprrc
    auto-install-peers=true
    ```
    
    `auto-install-peers=true`를 `.npmrc` 파일에 추가하면, npm이 패키지를 설치할 때 **peer dependencies**(동반 의존성)를 자동으로 설치하는 동작을 활성화하게 됩니다.
    
    ### `peer dependencies`란?
    
    `peer dependencies`는 특정 패키지를 설치할 때, 그 패키지가 **함께 설치되어야 하는** 다른 패키지를 지정하는 방식입니다. 주로 **플러그인**이나 **라이브러리**에서 특정 버전의 패키지와 함께 사용될 때 필요합니다. 예를 들어, React 관련 라이브러리는 특정 버전의 React와 함께 설치되어야 하는 경우가 많습니다.
    
    기본적으로 npm은 `peer dependencies`를 자동으로 설치하지 않으며, 수동으로 설치하라고 경고만 해 줍니다. `auto-install-peers=true`를 사용하면 이러한 `peer dependencies`를 수동으로 처리할 필요 없이 자동으로 설치됩니다.
    
    ### `auto-install-peers=true`의 효과:
    
    1. **자동으로 동반 의존성 설치**: npm이 패키지를 설치할 때, 해당 패키지가 필요로 하는 `peer dependencies`가 있는 경우 이를 자동으로 설치합니다.
    2. **수동 설치 불필요**: 이전에는 `peer dependencies` 경고 메시지를 보고 수동으로 설치해야 했지만, 이 설정을 사용하면 자동으로 처리되기 때문에 추가적인 작업이 줄어듭니다.
    
    ### 예시:
    
    만약 `react-datepicker` 패키지를 설치할 때, `react`와 `react-dom`이라는 `peer dependencies`가 필요하다면, 이 옵션이 없으면 수동으로 `react`와 `react-dom`을 설치해야 합니다.
    
    ```bash
    npm install react-datepicker
    
    ```
    
    이후 경고 메시지가 뜨면서 `react`와 `react-dom`을 설치하라는 안내가 나오지만, `auto-install-peers=true`를 설정하면 경고 없이 필요한 `peer dependencies`가 자동으로 설치됩니다.
    
    ### 주의사항:
    
    - 이 기능은 **npm 7 이상**에서 기본적으로 제공되며, 최신 npm 버전에서는 이 옵션을 명시적으로 설정하지 않아도 동반 의존성(`peer dependencies`)이 자동으로 설치됩니다.
    - npm 버전 6 이하에서는 `peer dependencies`가 자동으로 설치되지 않기 때문에, 이 옵션이 필요 없습니다.
    
    ### 결론:
    
    `auto-install-peers=true`를 설정하면 `peer dependencies`가 자동으로 설치되어 수동 설치 작업을 줄여 줍니다. 하지만 최신 npm 버전(7 이상)에서는 기본적으로 이 기능이 활성화되어 있으므로, 추가 설정이 필요 없을 수 있습니다.
    
- `pnpm` 도입 후 달라지는 점
    1. **의존성 설치 방식의 차이 (Hard Linking)**
        - `pnpm`은 패키지들을 **글로벌 캐시**에 저장한 후, 각 프로젝트의 `node_modules` 폴더에서 해당 패키지를 하드 링크로 참조합니다. 덕분에, 동일한 의존성을 여러 프로젝트에서 사용하더라도 디스크 공간을 절약할 수 있습니다.
        - `npm`이나 `yarn`과 달리, `pnpm`은 중복된 패키지를 각 프로젝트마다 개별적으로 설치하지 않으므로 훨씬 빠르고 효율적인 설치를 제공합니다.
    2. **속도 향상**
        - `pnpm`은 의존성을 설치할 때 하드 링크를 사용하여 파일을 복사하지 않기 때문에 설치 속도가 더 빠릅니다.
        - 글로벌 캐시를 이용해 중복 설치를 줄여 빠르게 의존성을 처리합니다.
    3. **디스크 공간 절약**
        - `pnpm`은 각 프로젝트의 `node_modules`에서 패키지의 사본을 저장하지 않고 하드 링크로 참조하기 때문에, 디스크 공간이 크게 절약됩니다. 특히 여러 프로젝트에서 동일한 의존성을 사용하는 경우 이점이 큽니다.
    4. **호이스팅 문제 해결**
        - `npm`이나 `yarn`에서는 패키지 의존성들이 프로젝트 전체로 "호이스팅"(최상위로 끌어올림)되어 의도하지 않게 다른 패키지에서 사용할 수 있게 되기도 합니다. 반면 `pnpm`은 패키지들을 "헤비컬리(Isolated)"하게 관리하여, 의도하지 않은 패키지 의존성 문제를 줄여줍니다.
    5. **속도와 효율성 외에 의존성 관리 방식은 동일**
        - `pnpm`을 사용한다고 해서 `package.json`을 아예 보지 않아도 된다는 것은 아닙니다. 여전히 `package.json`에서 의존성을 정의하고 버전을 관리해야 합니다.
        - `pnpm`은 기본적으로 `npm` 명령어와 비슷한 인터페이스를 제공하므로, `package.json`에 대한 역할은 변하지 않습니다. 의존성 추가, 제거, 스크립트 실행 등은 여전히 `package.json`에 의존합니다.
    
    ### 도입 후 사용 방법:
    
    - 의존성을 추가할 때는 여전히 아래 명령어를 사용합니다.
        
        ```bash
        pnpm add <패키지명>
        ```
        
    - 의존성을 제거할 때도 여전히 `package.json`에서 직접 관리하거나, 다음과 같은 명령어를 사용해야 합니다.
        
        ```bash
        pnpm remove <패키지명>
        ```
        
    
    ### 결론
    
    - `pnpm`을 도입한다고 해서 `package.json`의 역할이 사라지는 것은 아니지만, 더 빠르고 효율적으로 의존성을 설치하고 관리할 수 있는 장점이 있습니다. 디스크 공간 절약과 설치 속도 개선이 `pnpm`의 주요 이점이며, `package.json`은 여전히 의존성 관리의 중심에 있습니다.