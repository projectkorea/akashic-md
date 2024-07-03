'use client'; // 클라이언트 컴포넌트로 설정

import React, { useEffect, useState } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Test from '@/components/Test';

const components = { Test };

export default function TestPage() {
  const [source, setSource] = useState<MDXRemoteSerializeResult | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // 외부 URL에서 MD 파일을 가져옴
      const res = await fetch('https://raw.githubusercontent.com/projectkorea/Akashic-MD/main/typescript/chapter03/item19.md');
      const mdSource = await res.text();
      
      // MD 파일 내용을 MDX로 직렬화
      const mdxSource = await serialize(mdSource);
      setSource(mdxSource);
    };

    fetchData();
  }, []);

  if (!source) return <div>Loading...</div>;

  return (
    <div className="wrapper markdown-body p-10">
      <MDXRemote {...source} components={components} />
    </div>
  );
}
