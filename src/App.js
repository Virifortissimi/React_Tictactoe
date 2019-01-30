import React, { Component } from 'react';
import './App.css';

export default class App extends /*React.*/Component {
  render() {
    return (
      <div>
        <h3> TIC-TAC-TOE GAME </h3>
        <h4> For Fun, and Play </h4>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

