import PostButton from '@/components/post/PostButton'
import { NotionData, NotionPage } from '@/types/notionTypes'
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'

interface NotionListProps {
  list: NotionPage[]
}

export default function NotionList({ list }: NotionListProps ) {

  return (
    <>
      {list.map((data, idx) => (
        <PostButton key={data.id} type="notion" data={data} />
      ))}
    </>
  );
}
