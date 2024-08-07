import { Suspense } from 'react'
import LoadingPost from '@/components/post/LoadingPost' // Adjust the path if necessary
import ErrorBoundary from '@/components/post/ErrorBoundary' // Adjust the path if necessary

export default function Posts() {
  return (
    <section className="p-4 space-y-4">
      <ErrorBoundary fallback={<p className="text-red-500">Failed to load feed</p>}>
        <Suspense fallback={<p className="text-gray-500">Loading feed...</p>}>
          <LoadingPost />
        </Suspense>
      </ErrorBoundary>
    </section>
  )
}
