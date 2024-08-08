import PostButton from '@/components/post/PostButton'
import { NotionPages } from '@/types/notionTypes'
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'

interface NotionListProps {
  list: NotionPages
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
