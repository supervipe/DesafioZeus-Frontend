import './App.css';
import React from 'react'
import Navbar from './navbar/Navbar.jsx';

export default class App extends React.Component{
  render(){
    return (
      <>
        <div className= "App">
          <Navbar />
          <div class="column left">
            <img src="http://localhost:3000//assets/Open Doodles - Doggie.png" alt="Trulli"></img>
          </div>
          <div class="column middle">
            <h2>Zeus</h2>
          </div>
          <div class="column right">
            <h2>M</h2>
          </div>
          
        </div>
      </>
    );
  }
}

