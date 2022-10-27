import React from "react";
import "./Board.css";
import Card from "./Card";

const staticCards = ["card1", "card2", "card3", "card4"];

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      guessOne: null,
      guessTwo: null,
    };
  }
  shuffleCards = () => {
    const shuffledDeck = [...staticCards, ...staticCards].sort(
      () => Math.random() - 0.5
    );
    this.setState({ cards: shuffledDeck });
  };

  handleGuess = (cardText) => {
    console.log(cardText);
    //guessOne ? this.setState({guessTwo: cardText}) : this.setState({guessOne:cardText})
  };

  render() {
    return (
      <div>
        <h1>Memory Game</h1>
        <button onClick={this.shuffleCards}>New Game</button>
        <div className="Board">
          {this.state.cards.map((item, index) => (
            <Card key={index} cardText={item} handleGuess={this.handleGuess} />
          ))}
        </div>
      </div>
    );
  }
}

export default Board;
//
