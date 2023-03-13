import AdjustButtons from "./AdjustButtons";
import Timer from "./Timer";

const buttonData = [
  {"label": "Break", "length": 5},
  {"label": "Session", "length": 25}  
]

function App() {
  return (
    <>
      {buttonData.map(({label, length}) => 
        <AdjustButtons key={label} label={label} length={length} />
      )}
      <Timer label={buttonData[0].label} />
    </>
  );
}

export default App;