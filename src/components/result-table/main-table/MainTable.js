import Loading from '../../../parts/Loading';
import MainTableRow from './MainTableRow';
import { useEffect } from 'react';
import { TableWrapper } from '../../../styled/table';

const MainTable = ({ resultData, searchData, onUpdate }) => {
  useEffect(() => {
    onUpdate();
  }, [onUpdate]);

  const postList = resultData.data?.map((item) => {
    return <MainTableRow key={item[0] + item[1]} item={item} />;
  });

  const searchList = searchData.data?.map((item) => {
    return <MainTableRow key={item[0] + item[1]} item={item} />;
  });

  return (
    <TableWrapper>
      {console.log(resultData)}
      {resultData.isLoading ? (
        <Loading top={500} />
      ) : searchData.isSearching ? (
        searchList
      ) : (
        postList
      )}
    </TableWrapper>
  );
};

export default MainTable;
