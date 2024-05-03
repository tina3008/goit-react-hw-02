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

            const updateGood = () => {
        setState({
        ...state,
        good: state.good + 1
      });
    };
    
    const updateNeutral = () => {
        setState({
      ...state,
      neutral: state.neutral + 1
    });
    };
    
    const updateBad = () => {
        setState({
      ...state,
      bad: state.bad + 1
    });
    };
    const updateFeedback = feedbackType => {
        // Тут використовуй сеттер, щоб оновити стан
       }
 return(

<>
<Description/>
<Options
good= {updateGood}
neutral= {updateNeutral}
bad= {updateBad}

/>
<Feedback
feedback={state}

/>

</>
 );
};



 export default App
