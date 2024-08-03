import Link from 'next/link'

interface PostButtonProps {
  id: number
  title?: string
  description?: string
  ts?: number
}

export default function PostButton({ id, title, description, ts }: PostButtonProps) {
  return (
    <Link
      href={`/posts/${id}`}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      <h2 className="mb-3 text-2xl font-semibold">
        {`Go to MD File ${id}`}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
      </h2>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">Navigate to the posts page.</p>
    </Link>
  )
}
