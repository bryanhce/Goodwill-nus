import React, { useState } from "react";

import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import MenuModal from "./components/MenuFeatures/MenuModal/MenuModal";
import CompleteMap from "./components/Map/Map";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTimes,
  faList,
  faPlus,
  faStop,
  faCheckSquare,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

library.add(faTimes, faPlus, faList, faStop, faCheckSquare, faFilter);

const App = () => {
  //states
  const [isMenuPopUpVisible, setMenuPopUpVisible] = useState(false);

  //handlers
  const showMenuHandler = () => {
    setMenuPopUpVisible(true);
  };

  const hideMenuHandler = () => {
    setMenuPopUpVisible(false);
  };

  return (
    <div className="App">
      <div className="App-body">
        <AppHeader onShowMenu={showMenuHandler} />
        {isMenuPopUpVisible && <MenuModal onCloseMenu={hideMenuHandler} />}
        <CompleteMap />
      </div>
    </div>
  );
};

export default App;
