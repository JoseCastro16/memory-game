import React from "react";
import "./Board.css";
import Card from "./Card";

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

  shuffleCards = () => {
    const shuffledDeck = [...staticCards, ...staticCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, key: Math.random() }));
    console.log(shuffledDeck);
    this.setState({
      cards: shuffledDeck,
      turns: 0,
      guessOne: null,
      guessTwo: null,
    });
  };

  handleGuess = (card) => {
    if (this.state.guessOne && this.state.guessTwo) {
      return;
    }

    this.state.guessOne
      ? this.setState({ guessTwo: card })
      : this.setState({ guessOne: card });
  };

  resetTurn = () => {
    this.setState((prevState) => ({
      guessOne: null,
      guessTwo: null,
      turns: prevState.turns + 1,
    }));
  };

  render() {
    return (
      <div className="Container">
        <h1>Memory Game</h1>
        <button onClick={this.shuffleCards}>New Game</button>
        <div className="Board">
          {this.state.cards.map((card) => (
            <Card
              key={card.key}
              card={card}
              handleGuess={this.handleGuess}
              flipped={
                card === this.state.guessOne ||
                card === this.state.guessTwo ||
                card.matched
              }
            />
          ))}
        </div>
        <h2>Turns: {this.state.turns}</h2>
      </div>
    );
  }
}

export default Board;
