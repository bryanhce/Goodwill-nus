import React from "react";
import goodwillicon from "../../images/GoodWill.png";

import "./AppHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppHeader = (props) => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div className="app-header">
      <FontAwesomeIcon
        className="faicons icon-list"
        icon="list"
        onClick={props.onShowMenu}
      />
      <img
        src={goodwillicon}
        alt="goodwillicon"
        className="app-header__goodwill-icon"
      />
      <h3 className="header-date">{date}</h3>
    </div>
  );
};

export default AppHeader;
