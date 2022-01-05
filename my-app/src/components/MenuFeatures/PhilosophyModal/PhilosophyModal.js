import React from "react";
import PopUpCard from "../../AssistantFeatures/PopUpCard/PopUpCard";
import "./PhilosophyModal.css";
import CloseModal from "../../AssistantFeatures/CloseModal/CloseModal";

const PhilosophyModal = (props) => {
  return (
    <PopUpCard className="philosophy-popup">
      <header className="philosophy-header">
        <h2>Philosophy</h2>
        <CloseModal
          onClick={props.hidePhilosophyHandler}
          className="closemodal"
        />
      </header>
      <hr />
      <div className="philo-text">
        <p className="philo-para">
          The web application is titled “STRIKER” and the purpose is to track
          tasks to be completed. Mirroring the concept of bullet journaling by
          Ryder Carroll, the application revolves around simplicity and
          intentionality.
        </p>
        <p className="philo-para">
          The structure of STRIKER is simple - tasks are categorised into 3
          levels of priority - high, medium and low. Strike through each task
          once completed. The intentionality lies not only in planning the
          to-dos for the day but also in short bullet points. This allows users
          to pen down only the essentials and strip away the unnecessary. When
          users write excessively, it might seem like there is so much to
          accomplish. They become swamped and are overly busy. STRIKER aims to
          help users become more productive and weed out such distractions by
          being mindful and by prioritising what is important.
        </p>
        <p className="philo-para">
          Another feature of STRIKER is the ability to filter the task list and
          show tasks are pending completion and those that are done. This gives
          users a quick birds eye view of the various types of tasks without
          having to scroll through the entire list and make mental notes.
        </p>
        <p className="philo-para">
          In addition, if the user feels like assigning to-dos for the future,
          they can access the calendar feature and select the date to jot them
          down. This also opens up a feature of reviewing the users’ history to
          view completed, uncompleted and deleted tasks. The home page will
          always display the to-dos for the current day.
        </p>
      </div>
    </PopUpCard>
  );
};

export default PhilosophyModal;
