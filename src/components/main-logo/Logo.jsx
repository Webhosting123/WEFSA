import React from "react";
import "./Logo.scss";

const Logo = () => {
  const circles = ["W", "E", "F", "S", "A"];
  const abbreviations = ["Water", "Earth", "Fire", "Sky", "Air"];

  return (
    <div className="logo-wefsa">
      <div className="logo">
        {circles.map((letter, index) => (
          <div
            key={index}
            className={`circle ${abbreviations[index].toLowerCase()}`}
          >
            {letter}
          </div>
        ))}
      </div>
      {/* <div className="abbreviation">
        {abbreviations.map((abbr, index) => (
          <React.Fragment key={index}>
            <div>{abbr}</div>
            {index < abbreviations.length - 1 && <span>|</span>}
          </React.Fragment>
        ))}
      </div> */}
    </div>
  );
};

export default Logo;
