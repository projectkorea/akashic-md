import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

const fetchGithub = async (segment: string): Promise<MDXRemoteSerializeResult | null> => {
  const baseUrl = 'https:/raw.githubusercontent.com/projectkorea/Akashic-MD/'
  const url = baseUrl + segment.split('-').join('/')
  const res = await fetch(url)
  const mdString = await res.text()

  return await serialize(mdString)
}

export default fetchGithub