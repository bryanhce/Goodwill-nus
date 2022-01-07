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
  const [helpRequests, setHelpRequests] = useState([
    {
      requestId: 1,
      title: "Help me here",
      description: "Please help",
      timeNeeded: "15 minutes",
      location: { lat: 1.3053013, lng: 103.7716153 },
    },
    {
      requestId: 2,
      title: "Help me there",
      description: "Pretty please",
      timeNeeded: "5 minutes",
      location: { lat: 1.3063043, lng: 103.7701211 },
    },
  ]);

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
        {isMenuPopUpVisible && (
          <MenuModal
            onCloseMenu={hideMenuHandler}
            setHelpRequests={setHelpRequests}
            helpRequests={helpRequests}
          />
        )}
        <CompleteMap helpRequests={helpRequests} />
      </div>
    </div>
  );
};

export default App;
