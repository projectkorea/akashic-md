import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function getAllNotionList() {
  const databaseId = '0b79caee0df042e2ae7c5e367d85397d'; // 개발(1)

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: '최종 편집 일시',
          direction: 'descending',
        },
      ],
    });
    return response.results;
    
  } catch (error) {
    console.error(error);
    return [];
  }
}

