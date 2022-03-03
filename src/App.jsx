const App = () => {
  const tart = ['딸기', '무화과', '치즈'];
  const newTart = tart.map((item, index) => {
    const newItem = { id: index, name: item };
    return newItem;
  });

  const tart_array = newTart.map((item) => {
    return <div key={item.id}>{`${item.name} 타르트`}</div>;
  });

  return <div className='App'>{tart_array}</div>;
};

export default App;
