{
  // before
  const [nickname, setNickname] = useState('');
  const [nicknameLength, setNicknameLength] = useState(0);

  const updateNicknameLength = () => {
    setNicknameLength(nickname.length);
  };

  useEffect(updateNicknameLength, [nickname]);

  const updateNickname = (event) => {
    const nickname = event.target.value;
    setNickname(nickname);
  };
}

{
  // after
  const App = () => {
    const [nickname, setNickname] = useState('');
    const nicknameLength = useMemo(() => nickname, [nickname]);

    const updateNickname = (event) => {
      const nickname = event.target.value;

      setNickname(nickname);
    };

    return (
      <div>
        <input onChange={updateNickname} />
        <br />
        <label>{nicknameLength}</label>
      </div>
    );
  };

  export default App;
}
