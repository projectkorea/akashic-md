# Dashboard

## Tech Stack

- Framework: Next.js(^14), React(^18)
- Language: TypeScript
- State Management: Zustand
- Library: next-remote-mdx, @next/mdx, react-hook-form
- DB: local file system (mongoDB)
- Auth: x (firebase)
- Styling: Tailwind
- Hosting: Vercel

```bash
npx create-next-app@latest --typescript --tailwind --use-eslint-config  --import-alias '@/*'  --src-dir tech-blog
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
npm install next-mdx-remote github-markdown-css
```

## Structure

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
