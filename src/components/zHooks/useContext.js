import { createContext, useContext, useState } from "react";
import { useState, useContext, createContext } from "react";
import { A, Header } from "./basicContextComp";

export const ThemeContext = createContext();

function App1() {
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
};


function App2() {
  const StateContext = createContext();
  const [state, setState] = useState("");

  return (
    <StateContext.Provider value={{ state, setState }}>
      <Header />
      <A />
    </StateContext.Provider>
  );
}

function A() {
  const { setState } = useContext(StateContext);
  return (
    <div>
      <h1>B</h1>
      <input onChange={(e) => setState(e.target.value)} />
    </div>
  );
}

export default App;
