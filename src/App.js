import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Stars = (props) => {
  const numberOfStars = 1 + Math.floor(Math.random()*9);

  let stars = [];
  for(let i=0; i<numberOfStars; i++) {
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
      <button>=</button>
    </div>
  );
}

const Answer = (props) => {
  return (
    <div className="col-md-5">
      ...
    </div>
  );
}

const Numbers = (props) => {
  const arrayOfNumbers = [1,2,3,4,5,6,7,8,9];

  return (
    <div className="card text-center">
      {arrayOfNumbers.map((number, i) => 
      <span kye={i}>{number}</span>
      )}
    </div>
  );
}

class Game extends Component {
  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars />
          <Button />
          <Answer />
        </div>
        <br />
        <Numbers />
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
