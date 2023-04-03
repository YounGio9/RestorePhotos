import React from "react";

const [dark, setDark] = [true, () => {}];

export const ThemeContext = React.createContext({ dark, setDark });

const ThemeContextProvider = ({ children }) => {
  React.useEffect(() => {
    setDark(
      !(
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      )
    );
  });
  const [dark, setDark] = React.useState();

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
