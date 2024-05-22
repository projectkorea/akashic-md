import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");
  
  const switchTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const themeProps = { theme, switchTheme };

  return (
    <ThemeContext.Provider value={themeProps}>
      <Content />
    </ThemeContext.Provider>
  );
}

function Content() {
  const context = useContext(ThemeContext);
  return (
    <section className={`theme-${context.theme}`}>
      <span>Current theme: {context.theme}</span>
      <button onClick={context.switchTheme}>Switch Theme</button>
    </section>
  );
}

export default App;
