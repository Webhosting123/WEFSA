import React, { useContext, useState, useEffect } from "react";

import "./themebtn.scss";
import ThemeContext from "./themecontexts";
import { BsSunFill } from "react-icons/bs";
import { WiMoonAltWaningCrescent3 } from "react-icons/wi";
export default function ThemeSetter() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [checked, setChecked] = useState(theme === "light");
  useEffect(() => {
    // Set the theme in session storage whenever it changes
    sessionStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => {
    setChecked((prevChecked) => !prevChecked);
    setTheme(checked ? "dark" : "light");
  };

  return (
    <>
      <div className="theme-btn">
        <div
          className="checkbox-wrapper-54"
          style={
            checked
              ? { background: "black", borderRadius: "50%" }
              : { background: "white", borderRadius: "50%" }
          }
        >
          <label className="switch">
            <input type="checkbox" checked={checked} onChange={toggle} />
            <span className="slider">
              {checked ? (
                <>
                  <WiMoonAltWaningCrescent3 />
                </>
              ) : (
                <>
                  <BsSunFill />
                </>
              )}
            </span>
          </label>
        </div>
      </div>
    </>
  );
}
