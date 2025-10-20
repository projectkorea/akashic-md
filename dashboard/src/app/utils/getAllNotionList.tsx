import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_API_KEY });

/**
 * Get Notion database ID from environment variables
 * @param databaseId - Database ID (1, 2, 3, etc.)
 * @returns Database ID from environment variable
 * @throws Error if database ID is not found
 */
function getNotionDatabaseId(databaseId: number = 1): string {
  const envKey = `NOTION_DATABASE_ID_${databaseId}`;
  const dbId = process.env[envKey];

  if (!dbId) {
    throw new Error(`Missing environment variable: ${envKey}`);
  }

  return dbId;
}

/**
 * Get the count of configured Notion databases
 * @returns Number of databases configured in environment variables
 */
export function getNotionDatabaseCount(): number {
  let count = 0;
  let id = 1;

  while (process.env[`NOTION_DATABASE_ID_${id}`]) {
    count++;
    id++;
  }

  return count;
}

/**
 * Get Notion pages from a specific database
 * @param databaseId - Database ID (1, 2, 3, etc.)
 * @returns Array of Notion pages
 * @throws Error if databaseId is invalid or not configured
 */
export async function getNotionList(databaseId: number) {
  const totalCount = getNotionDatabaseCount();

  if (totalCount === 0) {
    throw new Error('No Notion databases configured. Please set NOTION_DATABASE_ID_1 in environment variables.');
  }

  if (databaseId < 1 || databaseId > totalCount) {
    throw new Error(`Invalid databaseId: ${databaseId}. Valid range is 1-${totalCount}.`);
  }

  const dbId = getNotionDatabaseId(databaseId);

  try {
    const response = await notion.databases.query({
      database_id: dbId,
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

/**
 * Get all Notion pages from all configured databases
 * @returns Array of Notion pages from all databases combined
 * @throws Error if no databases are configured
 */
export async function getAllNotionList() {
  const totalCount = getNotionDatabaseCount();

  if (totalCount === 0) {
    throw new Error('No Notion databases configured. Please set NOTION_DATABASE_ID_1 in environment variables.');
  }

  const allLists = await Promise.all(
    Array.from({ length: totalCount }, (_, i) => getNotionList(i + 1))
  );

  return allLists.flat();
}

