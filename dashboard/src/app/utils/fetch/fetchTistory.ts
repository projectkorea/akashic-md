import axios from 'axios'
import { load } from 'cheerio'
import TurndownService from 'turndown'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

const turndownService = new TurndownService()

export const fetchTistory = async (url: string): Promise<MDXRemoteSerializeResult | null> => {
  const { data } = await axios.get(url)
  const $ = load(data)
  const articleContent = $('article').html() || ''
  const markdownContent = turndownService.turndown(articleContent)
  return await serialize(markdownContent)
}
