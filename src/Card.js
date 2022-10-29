import React from "react";
import "./Card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFlipped: false };
  }

  handleClick = () => {
    this.props.handleGuess(this.props.card);
  };

  render() {
    if (this.props.flipped === false) {
      return <div className="back" onClick={this.handleClick}></div>;
    }

    if (this.props.flipped === true) {
      return (
        <div className="front" onClick={this.handleClick}>
          {this.props.card.text}
        </div>
      );
    }
  }
}

export default Card;
