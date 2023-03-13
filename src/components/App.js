import AdjustButtons from "./AdjustButtons";

const buttonData = [
  {"label": "Break", "length": 5},
  {"label": "Session", "length": 25}  
]

function App() {
  return (
    buttonData.map(({label, length}) => 
      <AdjustButtons key={label} label={label} length={length} />
    )
  );
}

export default App;