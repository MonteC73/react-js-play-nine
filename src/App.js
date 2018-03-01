import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Stars = (props) => {
  let stars = [];
  for(let i=0; i<props.numberOfStars; i++) {
    stars.push(<i key={i} className="fa fa-star"></i>);
  }
  return (
    <div className="col-md-5">
      {stars}
    </div>
  );
}

const Button = (props) => {
  return (
    <div className="col-md-2">
      <button className="btn" disabled={props.selectedNumbers.length === 0}>=</button>
    </div>
  );
}

const Answer = (props) => {
  return (
    <div className="col-md-5">
      {props.selectedNumbers.map((number, i) =>
      <span key={i} onClick={() => props.unselectNumber(number)}>{number}</span>
      )}
    </div>
  );
}

const Numbers = (props) => {
  const arrayOfNumbers = [1,2,3,4,5,6,7,8,9];
  const numberClassName = (number) => {
    if(props.selectedNumbers.indexOf(number) >= 0) {
      return "selected";
    }
  }
  return (
    <div className="card text-center">
      <div>
        {arrayOfNumbers.map((number, i) => 
        <span key={i} className={numberClassName(number)} 
              onClick={() => props.selectNumber(number)} >
              {number}
        </span>
        )}
      </div>
    </div>
  );
}

class Game extends Component {
  state = {
    selectedNumbers: [2,4],
    randomNumberOfStars: 1 + Math.floor(Math.random()*9),
  };
  selectNumber = (clickedNumber) => {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) { return; }
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }));
  };
  unselectNumber = (clickedNumber) => {
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
    }))
  }
  render() {
    const {selectedNumbers, randomNumberOfStars } = this.state;
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars numberOfStars={randomNumberOfStars} />
          <Button selectedNumbers={selectedNumbers} />
          <Answer selectedNumbers={selectedNumbers} 
                  unselectNumber={this.unselectNumber} />
        </div>
        <br />
        <Numbers selectedNumbers={selectedNumbers} 
                 selectNumber={this.selectNumber} />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Game />
      </div>
    );
  }
}



export default App;
