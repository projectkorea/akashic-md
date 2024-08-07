import PostButton from '@/components/post/PostButton'

const urls = [
  'https://raw.githubusercontent.com/projectkorea/Akashic-MD/main/typescript/chapter03/item19.md',
  'https://raw.githubusercontent.com/projectkorea/Akashic-MD/main/typescript/chapter01/item02.md',
  'https://raw.githubusercontent.com/projectkorea/Akashic-MD/main/typescript/chapter01/item03.md',
  'https://raw.githubusercontent.com/projectkorea/Akashic-MD/main/typescript/chapter01/item04.md',
]

export default function GithubList() {

  return (
    <>
      {urls.map((id, idx) => (
        <PostButton key={id} type="github" data={id} />
      ))}
    </>
  )
}
