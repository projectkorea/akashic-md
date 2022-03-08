const DetailList = ({ data, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(data[0])}
    >{`${data[0]}번째 ${data[1]}와${data[2]}`}</div>
  );
};

export default DetailList;
