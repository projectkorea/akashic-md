import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

const notion = new Client({ auth: process.env.NOTION_API_KEY })

export const fetchNotion = async (pageId: string): Promise<MDXRemoteSerializeResult | null> => {
  const n2m = new NotionToMarkdown({ notionClient: notion })
  const mdblocks = await n2m.pageToMarkdown(pageId)
  const mdString = n2m.toMarkdownString(mdblocks)
  return await serialize(mdString)
}
