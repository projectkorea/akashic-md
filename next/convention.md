### 라우팅되지 않는 폴더 이름:

1. `components`
2. `utils`
3. `helpers`
4. `hooks`
5. `styles`
6. `assets`
7. `lib`
8. `services`
9. `context`
10. `store`
11. `data`
12. `config`
13. `types`
14. `interfaces`

### 라우팅되지 않는 파일 이름:

1. `layout.tsx` / `layout.js` — 레이아웃을 정의하는 파일
2. `notFound.tsx` / `notFound.js` — 404 에러 페이지
3. `error.tsx` / `error.js` — 에러 페이지
4. `template.tsx` / `template.js` — 템플릿 정의
5. `head.tsx` / `head.js` — 페이지의 `<head>` 설정 파일
6. `middleware.ts` / `middleware.js` — 미들웨어 파일
7. `meta.tsx` / `meta.js` — 메타 정보 설정 파일

### package.json

```bash
// 어떤 UI 라이브러리의 package.json
{
  "name": "my-ui-lib",
  "peerDependencies": {
    "react": "^18.2.0"  // 실제로 설치되진 않음
  }
}

// 이 라이브러리를 사용하는 프로젝트의 package.json
{
  "dependencies": {
    "react": "^18.2.0",     // 실제 React 설치
    "my-ui-lib": "^1.0.0"   // UI 라이브러리 설치
  }
}
```