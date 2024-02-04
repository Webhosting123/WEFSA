import React from "react";
import "./whatsapp.scss";
import { ImWhatsapp } from "react-icons/im";

function Whatsapp() {
  return (
    <div className="whatup">
      <ul>
        <li>
          <a href="https://api.whatsapp.com/send?phone=+919965737555&text=I%27m%20interested%20in%20your%20meeting%20">
            +91 99657 37555
            <span className="whats-icon">
              <ImWhatsapp />
              <span></span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Whatsapp;
