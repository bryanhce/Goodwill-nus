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
        <p className="philo-para">“One act of kindness can go a long way” 
        Motivated to enable people of kindness and service, we created this web application so that people may lend a helping hand to those who need it. When you start with Good, the Good goes around. 
        Taking the concept of peer-to-peer (P2P) and applying it to social connections, Goodwill facilitates making and accepting help requests to connect with fellow NUSians.</p>
        <p className="philo-para">We, the creators, believe in people. 
        We envision a more open, collaborative and vibrant campus environment, regardless of faculty, or year. 
        Through Goodwill, we hope to cut through the hustle-and-bustle of the busy college student's life, and expose them to the wonders of reaching out a helping hand.</p>
        <p className="philo-para">How does our app work?</p>
        <p className="philo-para">A user of the application can take on 2 personas.</p>
        <p className="philo-para">First, as the “helper”. 
        The user can scan the surrounding area for people who require assistance. 
        The tasks are usually simple favours that would not require much expense. 
        Once the user finds a request that they can help fulfil, they may accept the request and converse with the person who requires help via Telegram.</p>
        <p className="philo-para">Second, as the “helpee”. 
        The user needs assistance and turns to the webapp for help by sending out a help request. 
        They can input the title, description, time needed and their current location or a specified location. 
        They then wait for a Good Samaritan who, sure enough, accepts the request, sending a notification to the user. 
        The user may then chat with the helper to settle the nitty gritty details. 
        Once done, both helpee and helper feel satisfied and happy.</p>
      </div>
    </PopUpCard>
  );
};

export default PhilosophyModal;
