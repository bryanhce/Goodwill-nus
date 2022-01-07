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
      title: "Could someone help me carry?",
      description:
        "This box is really heavy! Anyone free to lend a hand bringing this over to USC?",
      timeNeeded: "5 minutes",
      location: { lat: 1.3053013, lng: 103.7716153 },
      isAccepted: false,
    },
    {
      requestId: 2,
      title: "Could someone teach me React?",
      description:
        "I have this project due tomorrow but I'm struggling! Is there anyone with experience?",
      timeNeeded: "50 minutes",
      location: { lat: 1.3063043, lng: 103.7701211 },
      isAccepted: false,
    },
    {
      requestId: 3,
      title: "URGENT!",
      description: "I have fallen down and can't reach my crutches!",
      timeNeeded: "5 minutes",
      location: { lat: 1.3071021, lng: 103.76981 },
      isAccepted: false,
    },
    {
      requestId: 4,
      title: "Help with sunscreen",
      description:
        "Any STRONG and HANDSOME CS boys can lend a hand with applying sunscreen? uwu",
      timeNeeded: "10 minutes",
      location: { lat: 1.3063043, lng: 103.7741012 },
      isAccepted: false,
    },
    {
      requestId: 5,
      title: "I can't see!",
      description:
        "I dropped my glasses and can't seem to find them... Is anyone free?",
      timeNeeded: "5 minutes",
      location: { lat: 1.3058932, lng: 103.7716691 },
      isAccepted: false,
    },
    {
      requestId: 6,
      title: "Help buying lunch",
      description:
        "I have back-to-back lectures and no time to grab a meal. Can someone help me buy the food please? Of course, I will pay you back. Thanks!",
      timeNeeded: "2 minutes",
      location: { lat: 1.3059432, lng: 103.7712191 },
      isAccepted: false,
    },
    {
      requestId: 7,
      title: "Buy 1 for 1 Starbucks together",
      description:
        "Anyone want to buy Starbucks together so that we can split the cost?",
      timeNeeded: "1 minutes",
      location: { lat: 1.3054701, lng: 103.7708802 },
      isAccepted: false,
    },
  ]);

  //handlers
  const showMenuHandler = () => {
    setMenuPopUpVisible(true);
  };

  const hideMenuHandler = () => {
    setMenuPopUpVisible(false);
  };

  const removeAcceptedHandler = () => {
    setHelpRequests(helpRequests.filter((r) => r.isAccepted === false));
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
        <CompleteMap
          helpRequests={helpRequests}
          removeAcceptedHandler={removeAcceptedHandler}
        />
      </div>
    </div>
  );
};

export default App;
