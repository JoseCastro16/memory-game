import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";

function App() {
  const cardValues = ["card1", "card2"];
  return (
    <div className="App">
      {cardValues.map((item, index) => (
        <Card key={index} cardId={item} />
      ))}
    </div>
  );
}

export default App;
