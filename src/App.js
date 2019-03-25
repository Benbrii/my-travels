import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./destination";
import Country from "./country";
import Photo from "./photo";
import Distance from "./distance";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travels</h1>
        </header>
        <Travel 
          quote="Wuiiiiiiiiiiiiiii"
          character="Paris"
          image="https://tse4.mm.bing.net/th?id=OIP.RXjQos26YKnd-UZ-6SSfNAHaEK&pid=15.1&P=0&w=315&h=178"
        />
        <Travel
          quote="Yooooooooooooo"
          character="Istanbul"
          image="https://tse3.mm.bing.net/th?id=OIP.pwyS69HrSiMa1C5oxN5_IQHaEc&pid=15.1&P=0&w=269&h=162"
        />
        <Country />
        <Photo />
        <Distance />
      </div>
    );
  }
}

export default App;