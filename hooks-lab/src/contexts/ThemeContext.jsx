import { createContext, useState } from "react";

const ThemeContext = createContext()
export default ThemeContext

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  // const supportedThemes = ['light', 'dark']

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
      { children }
    </ThemeContext.Provider>
  )
}