import axios from 'axios';
import { useState, useEffect } from 'react';

const Dog = ({ search, isActive }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log(search);
      const { data } = await axios.get(
        `https://imsea.herokuapp.com/api/1?q=?${search}`
      );
      setData(data.results.slice(0, 20));
    };

    if (!isActive) {
      search ? fetchData() : setData([]);
    }
  }, [search, isActive]);

  return (
    <>
      <div stye={{ diplat: 'flex' }}>
        {data.map((item, index) => (
          <img
            key={index}
            src={item}
            alt=''
            style={{ width: 200, height: 200 }}
          ></img>
        ))}
      </div>
    </>
  );
};

export default Dog;
