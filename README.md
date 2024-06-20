This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project Setting

- Language: TypeScript
- Framework: Next.js(^14), React(^18)
- State Management: Zustand
- Styling: Tailwind CSS
- Library: react-hook-form
- Hosting: Vercel, MDX

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

First, run the development server:

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
