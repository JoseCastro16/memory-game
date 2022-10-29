import React from "react";
import "./Card.css";

function Card(props) {
  const handleClick = () => {
    props.handleGuess(props.card);
  };

  if (props.flipped === false) {
    return <div className="back" onClick={handleClick}></div>;
  }

  if (props.flipped === true) {
    return (
      <div className="front" onClick={handleClick}>
        {props.card.text}
      </div>
    );
  }
}

export default Card;
