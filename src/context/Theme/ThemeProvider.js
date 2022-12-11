import ThemeContext from "./ThemeContext";
import { useState } from "react";

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    return (
      <ThemeContext.Provider value={{ theme, switchTheme: setTheme }}>
        {children}
      </ThemeContext.Provider>
    );
}

export default ThemeProvider;