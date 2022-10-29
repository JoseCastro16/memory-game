import React from "react";
import "./Board.css";

const staticCards = [
  { text: "1", matched: false },
  { text: "2", matched: false },
  { text: "3", matched: false },
  { text: "4", matched: false },
  { text: "5", matched: false },
  { text: "6", matched: false },
];

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      turns: 0,
    };
  }

  render() {
    return (
      <div className="Container">
        <h1>Memory Game</h1>
        <button onClick={this.shuffleCards}>New Game</button>
        <h2>Turns: {this.state.turns}</h2>
      </div>
    );
  }
}

export default Board;
