import axios from 'axios'
import cheerio from 'cheerio'
import TurndownService from 'turndown'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

const turndownService = new TurndownService()

export const fetchTistory = async (url: string): Promise<MDXRemoteSerializeResult | null> => {
  const { data } = await axios.get(url)
  const $ = cheerio.load(data)
  const articleContent = $('article').html() || ''
  const markdownContent = turndownService.turndown(articleContent)
  return await serialize(markdownContent)
}
