import { useState } from 'react';

function CoffeeOrderComponent() {
  const coffee_array = [
    {
      id: 1,
      price: 4100,
      name: '아메리카노',
      num: 0,
    },
    {
      id: 2,
      price: 4600,
      name: '카페라떼',
      num: 0,
    },
    {
      id: 3,
      price: 5100,
      name: '캐러멜 마키아토',
      num: 0,
    },
  ];
  const [data, setData] = useState(coffee_array);
  const [money, setMoney] = useState(50000);
  const [price, setPrice] = useState(0);

  const onClick = (id, isAdd) => () => {
    const new_array = [...data];
    isAdd
      ? new_array[id - 1]['num']++
      : new_array[id - 1]['num'] > 0 && new_array[id - 1]['num']--;
    setData(new_array);
  };

  const onCalc = () => {
    const newPrice = data.reduce((acc, cur) => acc + cur.price * cur.num, 0);
    setPrice(newPrice);
    setMoney(money - newPrice);
  };

  const coffee_list = data.map((item) => {
    return (
      <p key={item.id}>
        {`₩${item.price} ${item.name}: ${item.num} `}
        <button onClick={onClick(item.id, true)}>추가</button>
        <button onClick={onClick(item.id, false)}>감소</button>
      </p>
    );
  });
  return (
    <div className='CoffeeOrderComponent'>
      <div>
        <p>{coffee_list}</p>
        <p>
          <button onClick={onCalc}>총 가격</button>
          {`: ${price}`}
        </p>
        <p>{`남는 돈: ${money}`}</p>
      </div>
    </div>
  );
}

export default CoffeeOrderComponent;
