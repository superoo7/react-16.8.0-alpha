import * as React from "react";
import store from "./ContextStore";
import ChildContext from "./ChildContext";

export default () => {
  const [theme, setTheme] = React.useState("dark");

  const handleClick = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <store.ThemeContext.Provider value={theme}>
      <div>
        <h1>Context</h1>
        <button onClick={handleClick}>Toggle</button>
        <ChildContext />
      </div>
    </store.ThemeContext.Provider>
  );
};
