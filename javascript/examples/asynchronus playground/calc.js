import './app.css';

const Form = () => {
  const form = document.getElementById('input-form');
  const button = document.getElementById('form-button');
  const result = document.getElementById('result-text');

  button.addEventListener('click', (e) => {
    const formData = formDataToObject(new FormData(form));
    const { principal, rate, year, frequency } = parseUserInputs(formData);
    const amount = calculateCompoundInterest(principal, rate, year, frequency);
    result.innerText = getResultText(principal, rate, year, frequency, amount);
  });
};

function getResultText(principal, rate, year, frequency, amount) {
  principal = parseMoneyText(principal);
  frequency = parseFrequencyText(frequency);
  rate = parseRateText(rate);
  amount = parseMoneyText(amount);
  return `예금액 ${principal}원 기준\n${year}년 후\n${frequency} ${rate}%의 복리 계산 시\n최종 잔고는\n ${amount}원 입니다.`;
}

function parseRateText(rate) {
  return (rate * 100).toFixed(2);
}

function parseMoneyText(principal) {
  return principal.toLocaleString('ko-KR');
}

function parseFrequencyText(frequency) {
  return {
    1: '연별',
    2: '반기별',
    4: '분기별',
    12: '월별',
  }[frequency];
}

function calculateCompoundInterest(principal, rate, year, frequency) {
  const result = principal * Math.pow(1 + rate / frequency, frequency * year);
  return Math.floor(result);
}

function parseUserInputs(formData) {
  const { principal, rate, year, frequency } = formData;

  return {
    principal: Number(principal),
    rate: Number((rate / 100).toFixed(2)),
    year: Number(year),
    frequency: Number(frequency),
  };
}

const app = () => {
  Form();
};

module.exports = app;

function formDataToObject(formData) {
  return Array.from(formData.entries()).reduce(
    (acc, [k, v]) => ((acc[k] = Number(v)), acc),
    {}
  );
}
