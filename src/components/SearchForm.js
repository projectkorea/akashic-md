const SearchForm = ({ onSearch }) => {
  return (
    <div style={{ border: '2px solid black', padding: '20px' }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(e.target.search.value);
        }}
      >
        <input type='text' name='search'></input>
        <input type='submit'></input>
      </form>
    </div>
  );
};

export default SearchForm;
