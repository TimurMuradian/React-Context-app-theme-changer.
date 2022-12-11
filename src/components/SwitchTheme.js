import { useContext } from "react";
import ThemeContext from "../context/Theme/ThemeContext";

const SwitchTheme = () => {

    const { switchTheme, theme } = useContext(ThemeContext);

    const handleLightTheme = () => switchTheme("light");
    const handleDarkTheme = () => switchTheme("dark");

    return (
      <div>
        {theme === "dark" ? (
          <button onClick={handleLightTheme}>Light theme</button>
        ) : (
          <button onClick={handleDarkTheme}>Dark theme</button>
        )}
      </div>
    );
};

export default SwitchTheme;
