import React from 'react';

const ThemeContext = React.createContext();

const Content = () => {
  const context = React.useContext(ThemeContext);
  return (
    <section className={`theme-${context.theme}`}>
      <span>Current theme: {context.theme}</span>
      <button onClick={context.switchTheme}>Switch Theme</button>
    </section>
  );
};

function App() {
  const [theme, setTheme] = React.useState('dark');
  const switchTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };
  const themeProps = { theme, switchTheme };
  return (
    <ThemeContext.Provider value={themeProps}>
      <Content />
    </ThemeContext.Provider>
  );
}

export default App;
