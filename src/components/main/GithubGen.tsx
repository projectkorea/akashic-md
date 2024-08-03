import PostButton from '@/components/post/PostButton'

export default function PostButtons() {
  const ids = [0, 1, 2, 3]

  return (
    <>
      {ids.map((id) => (
        <PostButton key={id} id={id} />
      ))}
    </>
  )
}
