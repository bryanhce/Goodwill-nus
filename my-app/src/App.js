import React, { useState } from "react";

import "./App.css";
import FilterModal from "./components/FilterFeatures/FilterModal/FilterModal";
import ViewFilter from "./components/FilterFeatures/ViewFilter/ViewFilter";
import AddTaskIcon from "./components/AddingFeatures/AddTaskIcon/AddTaskIcon";
import AddTaskModal from "./components/AddingFeatures/AddTaskModal/AddTaskModal";
import AppHeader from "./components/AppHeader/AppHeader";
import MenuModal from "./components/MenuFeatures/MenuModal/MenuModal";

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
  const [isFilterPopUpVisible, setFilterPopUpVisible] = useState(false);

  const [isAddTaskPopUpVisible, setAddTaskPopUpVisible] = useState(false);

  const [filterStatus, setFilterStatus] = useState("all");

  const [isMenuPopUpVisible, setMenuPopUpVisible] = useState(false);

  //handlers
  const showAddNewTaskHandler = () => {
    setAddTaskPopUpVisible(true);
  };

  const hideAddNewTaskHandler = () => {
    setAddTaskPopUpVisible(false);
  };

  const showFilterModalHandler = () => {
    setFilterPopUpVisible(true);
  };

  const hideFilterModalHandler = () => {
    setFilterPopUpVisible(false);
  };

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
        {isFilterPopUpVisible && (
          <FilterModal
            onCloseFilterPopUp={hideFilterModalHandler}
            setFilterStatus={setFilterStatus}
          />
        )}
        {isAddTaskPopUpVisible && (
          <AddTaskModal onCloseAddTaskPopUp={hideAddNewTaskHandler} />
        )}
        {isMenuPopUpVisible && <MenuModal onCloseMenu={hideMenuHandler} />}
        <div className="editors">
          <AddTaskIcon onShowAddNewTaskHandler={showAddNewTaskHandler} />
          <ViewFilter onShowFilterPopUp={showFilterModalHandler} />
        </div>
      </div>
    </div>
  );
};

export default App;
