import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

const notion = new Client({ auth: process.env.NOTION_API_KEY })

export const fetchNotion = async (pageId: string): Promise<MDXRemoteSerializeResult | null> => {
  const n2m = new NotionToMarkdown({ notionClient: notion })

  try {
    console.time('Fetch Notion Page')
    const mdblocks = await n2m.pageToMarkdown(pageId)
    console.timeEnd('Fetch Notion Page')

    console.time('Convert to Markdown String')
    const mdString = n2m.toMarkdownString(mdblocks).parent
    console.timeEnd('Convert to Markdown String')

    console.time('Serialize MDX')
    const mdxSource = await serialize(mdString)
    console.timeEnd('Serialize MDX')

    return mdxSource
  } catch (error) {
    console.error('Failed to fetch Notion page:', error)
    return null
  }
}
