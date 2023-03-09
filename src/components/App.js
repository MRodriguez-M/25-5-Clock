import AdjustButtons from "./AdjustButtons"

const buttonData = [
  {"label": "Break"},
  {"label": "Session"}  
]

function App() {
  return (
    buttonData.map(({label}) => 
      <AdjustButtons label={label} key={label} />
    )
  );
}

export default App;