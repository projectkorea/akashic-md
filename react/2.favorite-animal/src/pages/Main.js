import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from '../common/components/Header';
import AnimalBox from '../common/components/AnimalBox';
import AnimalList from '../common/components/AnimalList';
import Loading from '../common/components/Loading';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

const MainContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 1100px;
  margin-top: 30px;
`;

const Main = ({ getMainData }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        'https://script.googleusercontent.com/macros/echo?user_content_key=n2rvLJIfoDyD8q9ha5Wxf2E6GiR8Tez35vDsTQ9m3P8ohsg-tYoutUpcUE_YmtqkiMB3UGShP7bYHIcjGT9GvCn8M6wXWe4Cm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMnlFFJdsZ45o9OHBZtd23PRzGqnMMtwVXxZatTcZ_ElWWQARivlerawy0qOn_ogddlOaIY5A3XJYuWNj0SVUwM&lib=MQ5y52npMqnCycenuTos7mqgLslxuhQuA'
      );
      setIsLoading(false);
      const newData = data.map((item) => {
        const newItem = Object.assign({}, item);
        newItem.isGood = '';
        return newItem;
      });
      setData(newData);
      getMainData(newData);
    };
    fetchData();
  }, []);

  const onClick = (answer) => (index) => () => {
    const newData = Array.from(data);
    newData[index]['isGood'] = answer;
    setData(newData);
  };

  return (
    <MainContainer>
      <Header title={'내가 좋아하는 동물'} />
      {isLoading ? (
        <Loading />
      ) : (
        <MainContentContainer>
          <AnimalBox animals={data} onClick={onClick} />
          <AnimalList animals={data} />
        </MainContentContainer>
      )}
    </MainContainer>
  );
};

export default Main;
