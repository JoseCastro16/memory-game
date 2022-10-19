import React, { useState, useEffect } from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

// function Clock() {
//   const [time, setTime] = useState(new Date());
//   useEffect(() => {
//     setInterval(() => setTime(new Date()), 1000);
//   });
//   return (
//     <div>
//       <h1> Hello World!!</h1>
//       <h2>It is {time.toLocaleTimeString()} </h2>
//       <Clocktwo />
//     </div>
//   );
// }

export default Clock;
