import React from "react";
import "./styles.css";
const Header = (props) => {
  return (
    <div className="main">
      <div className="menu-bar">
        <div className="menu-bar-app-heading">
          <div className="menu-bar-app-heading-text">
            <h1>
              <a href="/home">Jaihind Collections</a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
