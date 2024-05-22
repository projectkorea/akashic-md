const DisplayUser = ({ name, money }) => {
  return (
    <div>
      <h1>{`안녕하세요. ${name}님.`}</h1>
      <h2>{`현재 남은 잔액은: ${money.toLocaleString()}원 입니다.`}</h2>
    </div>
  );
};

export default DisplayUser;
