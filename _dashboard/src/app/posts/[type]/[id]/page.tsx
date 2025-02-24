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
  console.log('❤️ fetchData',(new Date()).toLocaleTimeString(), type, id)
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


export async function generateStaticParams() {
  return [
    // 초기 빌드 시 사전 렌더링할 동적 경로
    { type: 'github', id: 'main-typescript-chapter01-item04.md' }, // shell
    { type: 'notion', id: '59c17271-2cba-4431-8df6-3932b41f1bc2' }, //
  ]
}

 // ISR (Incremental Static Regeneration)를 사용하여 n초마다 페이지를 재생성
export const revalidate = 60
