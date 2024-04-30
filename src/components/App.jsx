// import Card from './test'

// function App() {

//   return (
//     <>
//      <Card></Card>
//     </>
//   )
// }
import { useState } from 'react';

const ClickCounter = ({ value, onUpdate }) => {
	return  <button onClick={onUpdate}>Current: {value}</button>
};

const App = () => {
	const [clicks, setClicks] = useState(0);

	const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <>
			<ClickCounter value={clicks} onUpdate={handleClick} />
			<ClickCounter value={clicks} onUpdate={handleClick} />
    </>
  );
};

 export default App
