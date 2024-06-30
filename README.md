# Tech Blog

- 중점 사항: NextJS 사람들이 왜 열광하는지 구조 파악해보기

## Project Setting

- Framework: Next.js(^14), React(^18)
- Language: TypeScript
- State Management: Zustand
- Library: react-hook-form, MDX
- DB: local file system (maybe later mongoDB, firebase)
- Auth: x (maybe later firebase)
- Styling: Tailwind CSS
- Hosting: Vercel

```bash
npx create-next-app@latest --typescript --tailwind --use-eslint-config  --import-alias '@/*'  --src-dir tech-blog
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
```

### 라이브러리

- 정적 파일을 주로 사용할 경우 `@next/mdx`가 적합하고, 원격 소스나 CMS에서 데이터를 가져와야 하는 경우 `next-remote-mdx`가 더 적합

## Directory Structure

```
tech-blog/
├── _components/
│   └── Layout.tsx
├── _lib/
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

### 구조 설계 

- https://nextjs.org/docs/app/building-your-application/routing/colocation
- https://nextjs.org/docs/getting-started/project-structure#routing-files



## Reference

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
- [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
- [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
- [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
