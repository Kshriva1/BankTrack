import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import Intro from '../components/Intro/Intro';
import BankForm from '../components/BankForm/BankForm';
import Particles from 'react-particles-js';


const particleOptions = { 
 particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 1300
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state= {
      route : 'user'
    }
  }

  onRouteChange = (route) => {
    
    this.setState({
      route : route
    })

  }
  render() {
    return (
      <div className="App">
       <Particles className="particles" params={particleOptions} />
       <Navigation onRouteChange={this.onRouteChange} Route={this.state.route} />
       <Intro Route={this.state.route} />
       <BankForm Route={this.state.route} />
      </div>
    );
  }
}

export default App;



