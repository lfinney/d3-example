import React, { Component } from 'react';
import { render } from 'react-dom';
import * as d3 from "d3";
import Container from './Container';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Container />
      </div>
    );
  }
};
