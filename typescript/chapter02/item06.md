# ts 언어 서비스

- `tsserver`는 IDE에서 **ts의 언어 서비스**를 제공한다.

## ts 설치 시 구성 요소

- `tsc` (TypeScript Compiler)

- ts 코드를 js로 컴파일하며, 동시에 타입 검사를 수행한다.

타입 체커 (Type Checker): tsc 내부에 포함된 기능으로, 타입 시스템을 기준으로 코드가 올바른지 검사합니다. 컴파일 중에 코드가 타입 시스템의 규칙을 따르고 있는지 확인하고, 오류가 있으면 이를 출력합니다.

- `tsserver` (TypeScript Language Server)

- **IDE 와 상호작용하며, 실시간으로 타입 추론, 자동 완성, 오류 표시 등의 언어 서비스 기능을 제공합니다**. 개발자가 코드를 작성하는 동안 tsserver가 백그라운드에서 동작하여, 코딩 도중 타입 오류를 즉시 표시하고, 코드 리팩토링, 정의로 이동 등의 기능을 제공하는 것이 바로 이 서버 덕분입니다.

타입 검사와는 별개로 편집기에서 타입 정보를 제공하거나 자동 완성 기능을 위해 tsserver가 작동합니다. 하지만 tsserver는 코드 전체의 타입 검사를 책임지는 타입 체커와는 다릅니다.

```md
TypeScript 설치
   ├── tsc (TypeScript Compiler)
   │      ├── 컴파일 기능 (Compilation)
   │      │      ├── TypeScript → JavaScript 변환
   │      │      └── 트랜스파일링 옵션 (`--target`, `--module` 등)
   │      ├── 타입 체커 (Type Checker)
   │      │      ├── 타입 시스템 기반 코드 분석
   │      │      ├── 오류 감지 및 보고
   │      │      └── 타입 규칙에 따른 검사 (`strict`, `noImplicitAny` 등)
   │      └── 기타 기능 (Other Features)
   │             ├── Declaration 파일 생성 (`.d.ts`)
   │             ├── 소스맵 생성 (`--sourceMap`)
   │             ├── 파일 병합 (`--outFile`)
   │             └── 프로젝트 설정 관리 (`tsconfig.json`)
   └── tsserver (TypeScript Language Server)
          ├── 타입 추론 (Type Inference)
          │      ├── 변수 및 함수의 자동 타입 추론
          │      └── 추론된 타입에 대한 실시간 표시 (Hover 기능)
          ├── 자동 완성 (Auto-completion)
          │      ├── 변수, 함수, 클래스 등의 이름 완성
          │      └── 문맥 기반 제안
          ├── 오류 보고 (Error Reporting)
          │      ├── 실시간 오류 감지 및 경고
          │      └── 코드 내 빨간 밑줄 표시
          ├── 정의로 이동 (Go to Definition)
          │      ├── 변수, 함수, 클래스 등의 선언부로 이동
          │      └── 모듈 경로 및 import 확인
          ├── 참조 찾기 (Find References)
          │      ├── 코드 내 모든 참조 검색
          │      └── 파일 간 참조 추적
          ├── 리팩토링 지원 (Refactoring Support)
          │      ├── 코드 리네임 (Rename Symbol)
          │      └── 코드 추출 및 자동화 (Extract Function, Extract Variable)
          ├── 코드 포맷팅 (Code Formatting)
          │      ├── 설정에 맞는 자동 코드 정리
          │      └── `prettier`, `eslint` 같은 포매터와 연동
          └── 프로젝트 관리 기능 (Project Management)
                 ├── `tsconfig.json` 설정을 바탕으로 프로젝트 상태 유지
                 ├── 파일 간 종속성 추적
                 └── 대규모 프로젝트의 실시간 변경 사항 감지 및 업데이트
```
