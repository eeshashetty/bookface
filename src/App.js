import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './images/programmer.svg';
import splogo from './images/Add User-rafiki (1).svg'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {
  constructor() {
    super()
    this.loadPage = this.loadPage.bind(this)
    this.state = {
      showComp: false
    }
  }
  
  loadPage() {
    var n1 = document.getElementById("b1")
    var n2 = document.getElementById("sb")
    document.getElementById("App").removeChild(n1)
    // document.getElementById("App").removeChild(n2)
    this.setState({
      showComp: true,
    });
  }

  render() 
  { 
    var t = "<code>book";
    return (
        <div id="App" className="App">
          <div id="b1" className="box1">
            <div>
            <p className = "title">{t}</p>
            <p className = "body">A one-stop platform, uniting coders</p>
            </div>
            <div className = "img"><img src = {logo}  width="267.84" height="263.95"/></div>
          </div>
          <div id="b2" className="box2">
            <button id="sb" className="signup" onClick={this.loadPage}>Sign Up</button>
            {
              this.state.showComp ? <SignUp/> : null
            }
            <button className="login">Log In</button>
          </div>
        </div>
  );
}
}

function SignUp () {
  return (
  <div className = "test">
    <div>
    <img id="sp" src = {splogo}></img>
    </div>
    <div className = 'g1'>
      <p className="label">Sign Up</p>
      <form>
        <input className = "fn" type = "text" name = "firstname" />
        <input className = "ln" type = "text" name = "lastname" />
        <input type = "email" name = "email" />
        <input type = "password" name = "password" />
        <input type = "date" name = "dob" />
      </form>
    </div>
  </div>

  );
}

export default App;
