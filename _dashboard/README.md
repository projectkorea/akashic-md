# Dashboard Setting

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

## 디렉토리 설명

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

## Issues

- `raw.githubusercontent.com`을 사용하면 GitHub의 파일을 원시(raw) 형식으로 직접 가져올 수 있음.
- 이는 CORS 문제를 피할 수 있음
- 현재 사용 중인 URL `https://github.com/projectkorea/Akashic-MD/blob/main/typescript/chapter03/item20.md`는 HTML 페이지를 반환하며, CORS 헤더가 없다.
- 반면, `raw.githubusercontent.com`은 실제 파일 내용을 반환한다.

## Reference

- [구조 설계](https://nextjs.org/docs/app/building-your-application/routing/colocation)
- [컨벤션](https://nextjs.org/docs/getting-started/project-structure)
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
- [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
- [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
- [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

- Rendering [Building Your Application: Rendering](https://nextjs.org/docs/app/building-your-application/rendering)
- Routing [Building Your Application: Routing](https://nextjs.org/docs/app/building-your-application/routing)
- Data fetching [Building Your Application: Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching)
- Optimizing [Building Your Application: Optimizing](https://nextjs.org/docs/app/building-your-application/optimizing)

- https://developers.notion.com/docs/getting-started