import React, { useState, useEffect, useContext } from "react";
import "./gototop.scss";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import ThemeContext from "../contexts/themecontexts";

const GoTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-to-btm">
      {showTopBtn && (
        <button
          className="icon-position icon-style"
          style={
            theme === "dark"
              ? { background: "white", color: "black" }
              : { background: "black", color: "white" }
          }
          onClick={goToTop}
        >
          <IoArrowUpCircleOutline />
        </button>
      )}
    </div>
  );
};
export default GoTop;
