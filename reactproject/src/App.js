import React, { Component } from 'react'
import './App.css'
import Welcome from './components/Welcome'
import Tribute from './components/Tribute'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navBar: ['Home',
        'Dashboard',
        'Candidates', 
        'About']
    }
  }
  render() {
    const bar = this.state.navBar.map((val, index) => {
      return (
        <li key={index}>{val}</li>
      )
    })

  return (
    <div className="App">
      <div className="App-container">
        <nav className="navBar">
          <ul className="ulClass">
            {bar}
          </ul>
        </nav>
        <header className="App-header">
          
        <Welcome />
          
        </header>
        <Tribute />
        
      </div>
    </div>
  );
}
}

export default App;
