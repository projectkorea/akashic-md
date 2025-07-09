# npx

npx는 npm의 도구다.

1. 패키지를 설치하지 않고 CLI 도구를 일회성으로 실행할 수 있다.
2. 프로젝트 의존성 기반 실행

## 1. create-react-app을 글로벌로 설치하지 않고도 실행 가능

```bash
npx create-react-app my-app
```

## 2. 프로젝트의 expo 패키지를 사용해 실행

```bash
npx expo start
npx expo install
```

## 장점

1. 항상 최신 버전 사용 가능 (매번 최신 버전 다운로드)
2. 디스크 공간 절약 (일회성 실행 후 삭제)
3. 글로벌 설치 불필요
4. 버전 충돌 방지

## 자주 사용되는 예시

```bash
# 프로젝트 생성
npx create-react-app my-app
npx create-next-app my-app
npx expo init my-app

# 개발 도구 실행
npx prettier --write .
npx eslint .

# 패키지 버전 체크
npx npm-check-updates
```

### `npm-check-updates`

자주 사용하지 않는 유틸리티 도구이기 때문에, 전역으로 설치할 필요 없이 npx를 통해 필요할 때만 실행

```bash
# 글로벌 설치 방식
npm install -g npm-check-updates
ncu
```

```bash
# npx 사용 - 설치 없이 바로 실행
npx npm-check-updates
```

#### 장점

1. 디스크 공간 절약 (설치하지 않음)
2. 항상 최신 버전의 npm-check-updates를 사용할 수 있음
3. 글로벌 패키지 관리의 번거로움을 피할 수 있음

#### 문법

`npx npm-check-updates` (줄여서 `ncu`라고도 함)는 기본적으로 두 단계로 동작함

1. 먼저 실행하면 **업데이트 가능한 패키지들의 목록만 보여줍니다**. package.json을 실제로 수정하지는 않습니다.

```bash
npx npm-check-updates
npx ncu
```

2. 실제로 package.json을 업데이트하려면 `-u` 또는 `--upgrade`

```bash
npx npm-check-updates -u
npx ncu -u
```

3. package.json이 업데이트된 후에는 실제 패키지를 설치하기 위해 `npm install`을 실행해야 합니다.

4. 유용한 옵션

```bash
npx ncu --interactive  # 각 업데이트를 선택적으로 선택 가능
npx ncu -t patch      # patch 업데이트만
npx ncu -t minor      # minor 업데이트까지만  
npx ncu -t major      # major 업데이트까지 모두 (기본값)
npx ncu package-name  # 특정 패키지만 확인
```