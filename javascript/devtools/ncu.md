# npm 패키지 최신화 가이드

프로젝트 패키지들을 최신 버전으로 업데이트하는 방법 정리

## 업데이트 가능한 패키지 확인

### npm 기본 명령어
```bash
# 업데이트 가능한 패키지 확인
npm outdated

# 현재 설치된 패키지 목록
npm list --depth=0
```

### npm-check-updates (ncu) - 추천
```bash
# 업데이트 가능한 패키지 확인 (npx로 최신 버전 사용)
npx npm-check-updates

# 또는 줄여서
npx ncu

# 전역 패키지 확인
npx npm-check-updates -g
```

> **참고**: 만약 deprecated 경고가 뜬다면 `npx npm-check-updates`로 전체 패키지명을 사용하세요.

## 패키지 업데이트하기

### npm-check-updates로 최신화
```bash
# package.json을 최신 버전으로 업데이트
npx npm-check-updates -u

# 또는 줄여서 (deprecated 경고 시 위 명령어 사용)
npx ncu -u

# 실제 설치
npm install
```

### 선택적 업데이트
```bash
# 인터랙티브 모드 (원하는 것만 선택)
npx npm-check-updates -i

# 특정 패키지만 업데이트
npx npm-check-updates -u react react-dom
```

### 버전별 업데이트
```bash
# 패치 버전만
npx npm-check-updates -u --target patch

# 마이너 버전까지
npx npm-check-updates -u --target minor

# 메이저 버전까지 (모든 버전)
npx npm-check-updates -u --target major
```

## 전역 패키지 업데이트

```bash
# 전역 패키지 확인
npx npm-check-updates -g

# 전역 패키지 업데이트
npx npm-check-updates -g -u
```

## 기본 워크플로우

```bash
# 1. 업데이트 가능한 패키지 확인
npx npm-check-updates

# 2. package.json 업데이트
npx npm-check-updates -u

# 3. 실제 설치
npm install

# 4. 테스트 (선택사항)
npm test
npm run build
```

## 자주 쓰는 옵션들

```bash
# 모든 패키지 최신화 (deprecated 경고 시 전체 패키지명 사용)
npx npm-check-updates -u && npm install

# dev dependencies만 업데이트
npx npm-check-updates -u --dep dev

# dependencies만 업데이트  
npx npm-check-updates -u --dep prod

# 특정 패키지 제외
npx npm-check-updates -u --reject eslint,prettier
```

## 팁

- `ncu`가 `npm outdated`보다 더 깔끔하고 옵션이 많음
- `-u` 옵션 없으면 실제 업데이트는 안 되고 확인만 됨
- 메이저 버전 업데이트 시에는 breaking changes 주의
- package-lock.json도 같이 업데이트됨

---

간단하게 최신화하려면: `npx npm-check-updates -u && npm install`

> **Deprecated 경고가 뜨는 경우**:
 `npx ncu` 대신 `npx npm-check-updates`로 전체 패키지명을 사용하세요.
 