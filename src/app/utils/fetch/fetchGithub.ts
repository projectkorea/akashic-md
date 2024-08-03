import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

const urls = [
  'https://raw.githubusercontent.com/projectkorea/Akashic-MD/main/typescript/chapter03/item19.md',
  'https://raw.githubusercontent.com/projectkorea/Akashic-MD/main/typescript/chapter01/item02.md',
  'https://raw.githubusercontent.com/projectkorea/Akashic-MD/main/typescript/chapter01/item03.md',
  'https://raw.githubusercontent.com/projectkorea/Akashic-MD/main/typescript/chapter01/item04.md',
]

export const fetchGithub = async (id: string): Promise<MDXRemoteSerializeResult | null> => {
  if (parseInt(id) < urls.length) {
    const res = await fetch(urls[parseInt(id)])
    const mdSource = await res.text()
    return await serialize(mdSource)
  }
  return null
}
