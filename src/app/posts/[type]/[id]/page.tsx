import { notFound } from 'next/navigation'
import { fetchGithub, fetchNotion, fetchTistory } from '@/app/utils/fetch'
import PostPageClient from '@/components/post/PostPageClient'

interface PageProps {
  params: {
    type: string
    id: string
  }
}

const fetchData = async (type: string, id: string) => {
  switch (type) {
    case 'github':
      return await fetchGithub(id)
    case 'notion':
      return await fetchNotion(id)
    case 'tistory':
      return await fetchTistory(id)
    default:
      return null
  }
}

export default async function PostPage({ params }: PageProps) {
  const { type, id } = params
  const source = await fetchData(type, id)

  if (!source) return notFound()

  return <PostPageClient source={source} />
}
