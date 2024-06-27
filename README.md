# Tech Blog

- 중점사항: next.js 사용, 디자인 욕심은 최소한으로


## Project Setting

- Language: TypeScript
- Framework: Next.js(^14), React(^18)
- State Management: Zustand
- Styling: Tailwind CSS
- Library: react-hook-form, MDX
- DB: mongoDB, firebase
- Hosting: Vercel

## 고민

- 정적 파일을 주로 사용할 경우 @next/mdx가 적합하고, 원격 소스나 CMS에서 데이터를 가져와야 하는 경우 next-remote-mdx가 더 적합

```bash
npx create-next-app@latest --typescript --tailwind --use-eslint-config  --import-alias '@/*'  --src-dir tech-blog
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
```

## Directory Structure

```
tech-blog/
├── components/
│   └── Layout.tsx
├── lib/
│   └── posts.ts
├── pages/
│   ├── api/
│   │   └── posts.ts
│   ├── posts/
│   │   └── [id].tsx
│   ├── new-post.tsx
│   ├── index.tsx
│   └── _app.tsx
├── posts/
│   └── (generated mdx files)
├── public/
│   └── (static assets)
└── styles/
    ├── globals.css
    └── Layout.module.css
```

### 디렉토리 설명

- `lib`
  - 파일 시스템에서 MDX 파일을 읽기
  - MDX 파일의 내용을 파싱하여 게시물 데이터로 변환
  - 게시물의 메타데이터(예: 제목, 날짜)를 추출
- `pages/api`
  - 클라이언트에서 받은 데이터(예: 새로운 게시물)를 처리
  - 파일 시스템에 새로운 MDX 파일로 저장
- `posts/[id].tsx`
  - 동적 라우팅을 사용하여 특정 게시물 페이지를 렌더링
- `posts/`
  - `lib/posts.ts`에서 읽혀서 `pages/posts/[id].tsx`에서 렌더링

## Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## 2장 챕터 React Error Boundaries

## 요약

### 오류 포착 및 상태 업데이트

`getDerivedStateFromError` 메서드와 `componentDidCatch` 메서드를 통해 오류를 포착하고 상태를 업데이트합니다.

### 대체 UI 렌더링

오류가 발생하면 `fallback` 속성으로 전달된 UI를 렌더링하여 사용자에게 오류가 발생했음을 알립니다.

## 호출 순서 설명

### 오류 발생
자식 컴포넌트에서 오류가 발생

### `getDerivedStateFromError` 호출

- React는 먼저 `getDerivedStateFromError`를 호출하여 컴포넌트의 상태를 업데이트합니다.
- 예제 코드에서는 `console.log("getDerivedStateFromError called")`가 출력됩니다.
- 상태가 업데이트되면, React는 컴포넌트를 다시 렌더링하고, 업데이트된 상태에 따라 폴백 UI를 표시할 수 있습니다.

### `componentDidCatch` 호출

- 다음으로, React는 `componentDidCatch`를 호출합니다.
- 이 메서드에서는 오류와 오류 정보를 받아서 추가적인 작업을 수행할 수 있습니다.
- 예제 코드에서는 `console.log("componentDidCatch called")`와 함께 오류가 출력됩니다.

## 요약

- **`getDerivedStateFromError`**가 먼저 호출되어 상태를 업데이트하고 UI를 변경합니다.
- 그 다음에 **`componentDidCatch`**가 호출되어 오류를 로깅하거나 외부 서비스에 보고하는 등의 추가 작업을 수행합니다.
