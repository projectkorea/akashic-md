'use client'

import Link from 'next/link'

interface PostButtonProps {
  title?: string
  description?: string
  ts?: number
  data: any
  type: string
}

export default function PostButton({ type, data, ts }: PostButtonProps) {
  const pageId = data.id || data.split('/').slice(5).join('-');
  const emoji = data?.icon?.emoji || '📄';
  const title = data?.properties?.["이름"]?.title[0]?.plain_text || data.split('/').slice(6,9).join('\n').replace('.md', '');


  return (
    <Link
      href={`/posts/${type}/${pageId}`}
      scroll={true}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      <h2 className="mb-3 text-2xl font-semibold">
        {`${emoji} ${title}`}
      </h2>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">from {`${type}`}</p>
    </Link>
  )
}
