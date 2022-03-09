import SubTable from '../../containers/SubTable';
import FilterHeader from '../../containers/FilterHeader';

const SubTableView = ({ name }) => {
  return (
    <div>
      <FilterHeader />
      <SubTable name={name} />
    </div>
  );
};

export default SubTableView;
