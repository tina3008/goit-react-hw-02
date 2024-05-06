import { useState, useEffect } from "react";

import Description from "./description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";
const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  let totalFeedback = 0;

  const updateFeedback = (feedbackType) => {
    setState({
      ...state,
      [feedbackType]: state[feedbackType] + 1,
    });
  };

  for (let i of Object.values(state)) {
    totalFeedback += i;
  }

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />

      {totalFeedback > 0 ? (
        <Feedback feedback={state} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
