function Problem() {
  const [text, setText] = useState('');
  useEffect(() => {
    setText(text + ' 입니다.');
  }, [text]);
  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
