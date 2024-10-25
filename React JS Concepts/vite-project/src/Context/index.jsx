import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [theme, setTheme] = useState("light");
  function handleThemeChange() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <GlobalContext.Provider value={{ theme, handleThemeChange }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
