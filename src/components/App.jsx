 import { useState, useEffect } from "react";

import Description from './description/Description'
import Feedback from './Feedback/Feedback';
import Options from './Options/Options'

const App = () => {
    const [state, setState] = useState({
        good: 0,
        neutral: 0,
        bad: 0
      });

    

const updateFeedback = feedbackType => {
  setState({
      ...state,
    [feedbackType]: state[feedbackType] + 1,
  });
};

 return(

<>
<Description/>
<Options
updateFeedback={updateFeedback}
/>

<Feedback
feedback={state}

/>

</>
 );
};



 export default App
