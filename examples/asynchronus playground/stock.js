import './app.css';

const StockForm = (addStock) => {
  const stockForm = document.querySelector('#stock-form');

  stockForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(stockForm);
    const [stockName, buyPrice, stockAmount, currentPrice] = [
      formData.get('stock-name'),
      Number(formData.get('buy-price')),
      Number(formData.get('stock-amount')),
      Number(formData.get('current-price')),
    ];

    addStock(stockName, buyPrice, stockAmount, currentPrice);
    stockForm.reset();
  });
};

const StockTable = (stocks) => {
  const stockTable = document.querySelector('.stock-table');
  const tableBody = stockTable.querySelector('.stock-table-body');

  const tableData = stocks.map(
    ({ stockName, buyPrice, currentPrice, stockAmount }) => ({
      name: stockName,
      earningRate: (((currentPrice - buyPrice) / buyPrice) * 100).toFixed(2),
      profit: (currentPrice - buyPrice) * stockAmount,
    })
  );

  tableBody.innerHTML = tableData.map(
    ({ name, earningRate, profit }) => `
  <tr>
      <td>${name}</td>
      <td>${earningRate}</td>
      <td>${profit}</td>
  </tr>
  `
  );
};

const StockResult = (stocks) => {
  const resultTextElement = document.querySelector('.result-text');

  if (stocks.length === 0) {
    resultTextElement.innerText = '종목을\n추가하세요.';
    return;
  }

  const [buyPriceSum, currentPriceSum] = [
    stocks.reduce((acc, cur) => acc + cur.buyPrice * cur.stockAmount, 0),
    stocks.reduce((acc, cur) => acc + cur.currentPrice * cur.stockAmount, 0),
  ];
  console.log(stocks);

  const earningRate = (
    ((currentPriceSum - buyPriceSum) / buyPriceSum) *
    100
  ).toFixed(2);
  const profit = Math.floor(currentPriceSum - buyPriceSum);

  resultTextElement.innerText = `현재 총 수익률은 ${earningRate}%이며,\n총 수익금은 ${profit}원 입니다.`;
};

const App = () => {
  const stocks = [];

  // StockTable, StockResult 렌더링 결과를, stock 정보를 바탕으로 계산합니다.
  const render = () => {
    StockTable(stocks);
    StockResult(stocks);
  };

  const addStock = (stockName, buyPrice, stockAmount, currentPrice) => {
    stocks.push({ stockName, buyPrice, stockAmount, currentPrice });
    render();
  };

  StockForm(addStock);
  render();
};

module.exports = App;
