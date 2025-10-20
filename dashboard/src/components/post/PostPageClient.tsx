'use client'

import { MDXRemote } from 'next-mdx-remote'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import DivComponent from '@/components/DivComponent'

interface PostPageClient {
  source: MDXRemoteSerializeResult
}

const PostPageClient = ({ source }: PostPageClient) => {
  return (
    <div className="wrapper markdown-body p-10">
      <MDXRemote {...source} components={{ DivComponent }} />
    </div>
  )
}

export default PostPageClient
