'use client'; // 클라이언트 컴포넌트로 설정

import React, { useEffect, useState } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import DivComponent from '@/components/DivComponent';

const components = { DivComponent };

const urls = [
  'https://raw.githubusercontent.com/projectkorea/Akashic-MD/main/typescript/chapter03/item19.md',
  'https://raw.githubusercontent.com/projectkorea/Akashic-MD/main/typescript/chapter01/item02.md',
  'https://raw.githubusercontent.com/projectkorea/Akashic-MD/main/typescript/chapter01/item03.md',
  'https://raw.githubusercontent.com/projectkorea/Akashic-MD/main/typescript/chapter01/item04.md',
];

interface PageProps {
  params: {
    id: string;
  };
}

export default function TestPage({ params }: PageProps) {
  const { id } = params; // URL에서 id를 가져옴
  console.log(params);
  const [source, setSource] = useState<MDXRemoteSerializeResult | null>(null);

  useEffect(() => {
    const fetchData = async (url: string) => {
      const res = await fetch(url);
      const mdSource = await res.text();

      // MD파일을 MDX로 직렬화
      const mdxSource = await serialize(mdSource);
      setSource(mdxSource);
    };

    if (id && parseInt(id) < urls.length) {
      fetchData(urls[parseInt(id)]);
    }
  }, [id]);

  if (!source) return <div>Loading...</div>;

  return (
    <div className="wrapper markdown-body p-10">
      <MDXRemote {...source} components={components} />
    </div>
  );
}
